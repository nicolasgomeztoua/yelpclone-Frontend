import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Routes/Home.jsx";
import RestaurantDetails from "./Routes/RestaurantDetails.jsx";
import UpdateRes from "./Routes/UpdateRes.jsx";
import { RestaurantContextProvider } from "./Context/RestaurantHandler";
function App() {
  return (
    <RestaurantContextProvider>
      <div className="container">
        <Router>
          <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route
              exact
              path="/restaurants/:id"
              component={RestaurantDetails}
            ></Route>
            <Route
              exact
              path="/restaurants/:id/update"
              component={UpdateRes}
            ></Route>
          </Switch>
        </Router>{" "}
      </div>{" "}
    </RestaurantContextProvider>
  );
}

export default App;
