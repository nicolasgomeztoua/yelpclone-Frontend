import axios from "axios";

const baseURL = "https://yelpclonebackend.herokuapp.com/api/v1/restaurants";

export default axios.create({
  baseURL,
});
