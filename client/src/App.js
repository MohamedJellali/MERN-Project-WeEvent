import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
//actions
import { getAuthUser } from "./js/actions/authActions";
//components
import AppNavbar from "./components/AppNavbar";
import PrivateRoute from "./components/route/PrivateRoute";
import Dashboard from "./components/pages/Dashboard";
import Home from "./components/pages/Home";
import Sports from "./components/pages/Sports";
import Arts from "./components/pages/Arts";
import Outdoor from "./components/pages/Outdoor";
import Running from "./components/pages/sportsPages/Running";
import Biking from "./components/pages/sportsPages/Biking";
import Fitness from "./components/pages/sportsPages/Fitness";
import Books from "./components/pages/artsPages/Books";
import Painting from "./components/pages/artsPages/Painting";
import Hiking from "./components/pages/outdoorsPages/Hiking";
import Yoga from "./components/pages/outdoorsPages/Yoga";
import AddEvent from "./components/pages/AddEvent";
import SidebarCompnent from "./components/pages/Sidebar";
import LoginPage from "./components/auth/LoginPage";
import RegisterPage from "./components/auth/RegisterPage";
import EventPage from "./components/pages/EventPage";
import { getEvents } from "./js/actions/gettingActions";
import LoginPageAdd from "./components/auth/LoginPageAdd";

function App() {
  const dispatch = useDispatch();
  const getUser = () => dispatch(getAuthUser());
  useEffect(() => {
    getUser();
  }, []);

  //get all events
  const getAllEvents = () => {
    dispatch(getEvents());
  };

  const events = useSelector((state) => state.gettingReducer.events);
  useEffect(() => {
    getAllEvents();
  }, []);


  return (
    <div className="App">
      <BrowserRouter>
        <AppNavbar />
        <Switch>
          <Route exact path="/" component={Home} />
          {/* <PrivateRoute exact path="/dashboard/:id" component={Dashboard} /> */}
          <PrivateRoute path="/dashboard" component={Dashboard} />
          <PrivateRoute path="/add" component={AddEvent} />

          <Route path="/sports" component={Sports} />
          <Route path="/running" component={Running} />
          <Route path="/biking" component={Biking} />
          <Route path="/fitness" component={Fitness} />
          <Route path="/arts" component={Arts} />
          <Route path="/review" component={Books} />
          <Route path="/painting" component={Painting} />
          <Route path="/outdoor" component={Outdoor} />
          <Route path="/hikingCamping" component={Hiking} />
          <Route path="/yoga" component={Yoga} />
          {/* <Route path="/event/:id" render={(props) => <EventPage event={events} {...props} />} /> */}
          <Route path="/Login" component={LoginPage} />
          <Route path="/Loginn" component={LoginPageAdd} />
          <Route path="/Register" component={RegisterPage} />
          <Route
            path="/event/:id"
            render={(props) => <EventPage {...props} />}
          />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
