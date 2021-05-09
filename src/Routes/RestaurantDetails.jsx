import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { RestaurantContext } from "../Context/RestaurantHandler";
import RestaurantFinder from "../API's/RestaurantFinder";
import StarRating from "../Components/StarRating";
import Reviews from "../Components/Reviews";
import AddReview from "../Components/AddReview";

const RestaurantDetails = () => {
  const { id } = useParams();
  const { selectedRestaurant, setSelected } = useContext(RestaurantContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await RestaurantFinder.get(`/${id}`);
        console.log(response.data.data);

        setSelected(response.data.data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, []);
  return (
    <div>
      {selectedRestaurant && (
        <>
          <h1 className="text-center display-1">
            {selectedRestaurant.result.name}
          </h1>
          <div className="text-center">
            <StarRating rating={selectedRestaurant.result.average_rating} />
            <span className="text-warning ml-1">
              {selectedRestaurant.result.count
                ? `(${selectedRestaurant.result.count})`
                : `(0)`}
            </span>
          </div>
          <div
            className="mt-3 
          "
          >
            <Reviews reviews={selectedRestaurant.reviews} />
          </div>
          <AddReview />
        </>
      )}
    </div>
  );
};
export default RestaurantDetails;
