import { useState, useContext } from "react";
import RestaurantFinder from "../API's/RestaurantFinder";
import { RestaurantContext } from "../Context/RestaurantHandler";
const AddRestaurant = () => {
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [price_range, setPrice_Range] = useState("Price Range");
  const { addRestaurants } = useContext(RestaurantContext);
  const handleSubmit = (e) => {
    e.preventDefault();

    const postRestaurant = async () => {
      try {
        const response = await RestaurantFinder.post("/", {
          name,
          location,
          price_range,
        });
        addRestaurants(response.data.data.result);
      } catch (error) {
        console.error(error);
      }
    };
    postRestaurant();
  };

  return (
    <div className="mb-4">
      <form action="" onSubmit={handleSubmit}>
        <div
          className="form-row"
          style={{
            display: "grid",
            gridTemplateRows: "1fr",
            gridTemplateColumns: "1fr 1fr 1fr 1fr",
            padding: "30px",
          }}
        >
          <div className="col">
            <input
              type="text"
              className="form-control"
              placeholder="name"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          </div>
          <div className="col">
            <input
              className="form-control"
              type="text"
              placeholder="location"
              value={location}
              onChange={(e) => {
                setLocation(e.target.value);
              }}
            />
          </div>
          <div className="col">
            <select
              className="custom-select my-1 mr-sm-2 form-select"
              value={price_range}
              onChange={(e) => {
                setPrice_Range(e.target.value);
              }}
            >
              <option disabled>Price Range</option>
              <option value="1">$</option>
              <option value="2">$$</option>
              <option value="3">$$$</option>
              <option value="4">$$$$</option>
              <option value="5">$$$$$</option>
            </select>
          </div>
          <button type="submit" className="btn btn-primary">
            Add
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddRestaurant;
