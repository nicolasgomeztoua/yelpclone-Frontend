import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import RestaurantFinder from "../API's/RestaurantFinder";
import { useHistory } from "react-router-dom";
const UpdateRestaurant = () => {
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [price_range, setPrice_Range] = useState(1);
  const { id } = useParams();
  const history = useHistory();
  useEffect(() => {
    const fetchData = async () => {
      const response = await RestaurantFinder.get(`/${id}`);
      setName(response.data.data.result.name);
      setLocation(response.data.data.result.location);
      setPrice_Range(response.data.data.result.price_range);
    };
    fetchData();
  }, [id]);
  const handleSubmit = async (e) => {
    e.preventDefault();
    await RestaurantFinder.put(`/${id}`, {
      name,
      location,
      price_range,
    });
    history.push("/");
  };
  return (
    <form action="" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          className="form-control"
          id="name"
          placeholder="Name"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
      </div>
      <div className="form-group">
        <label htmlFor="Location">Location</label>
        <input
          placeholder="Location"
          value={location}
          onChange={(e) => {
            setLocation(e.target.value);
          }}
          type="text"
          className="form-control"
          id="location"
        />
      </div>
      <div className="form-group">
        <label htmlFor="price_range">Price Range</label>
        <input
          placeholder="Price Range 1-5"
          value={price_range}
          onChange={(e) => {
            setPrice_Range(e.target.value);
          }}
          type="number"
          min="1"
          max="5"
          className="form-control"
          id="price_range"
        />
      </div>
      <button className="btn btn-primary" type="submit">
        Submit
      </button>
    </form>
  );
};

export default UpdateRestaurant;
