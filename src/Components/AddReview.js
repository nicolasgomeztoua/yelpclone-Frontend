import { useState } from "react";
import { useHistory, useLocation, useParams } from "react-router";
import RestaurantFinder from "../API's/RestaurantFinder";

const AddReview = () => {
  const [name, setName] = useState("");
  const [review, setReviewText] = useState("");
  const [rating, setRating] = useState("Rating");
  const { id } = useParams();

  const handleSubmit = (e) => {
    try {
      e.preventDefault();
      RestaurantFinder.post(`/${id}/addReview`, {
        name,
        review,
        rating,
      });
      setTimeout(() => {
        window.location.reload();
      }, 1000);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <div className="mb-2">
        <form action="" onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-group col-8">
              <label htmlFor="name">Name</label>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                id="name"
                placeholder="name"
                type="text"
                className="form-control"
              />
            </div>
            <div className="form-group col-4">
              <label htmlFor="rating">Rating</label>
              <select
                value={rating}
                onChange={(e) => setRating(e.target.value)}
                id="rating"
                className="custom-select"
              >
                <option disabled>Rating</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="Review">Review</label>
            <textarea
              value={review}
              onChange={(e) => setReviewText(e.target.value)}
              id="Review"
              className="form-control"
            ></textarea>
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddReview;
