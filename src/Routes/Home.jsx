import Header from "../Components/Header";
import AddRestaurant from "../Components/AddRestaurant";
import RestaurantList from "../Components/RestaurantList";
const Home = () => {
  return (
    <div>
      <Header></Header>
      <AddRestaurant></AddRestaurant>
      <RestaurantList></RestaurantList>
    </div>
  );
};

export default Home;
