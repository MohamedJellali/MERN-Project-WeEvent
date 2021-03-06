import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
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
import SidebarCompnent from './components/pages/Sidebar'
import LoginPage from "./components/auth/LoginPage";
import RegisterPage from "./components/auth/RegisterPage";

function App() {
  const dispatch = useDispatch();
  const getUser = () => dispatch(getAuthUser());
  useEffect(() => {
    getUser();
  }, []);

  return (
    <div className="App">

    <BrowserRouter>
      <AppNavbar />
      <Switch>
        <Route exact path="/" component={Home} />
        {/* <PrivateRoute exact path="/dashboard/:id" component={Dashboard} /> */}
        <PrivateRoute path="/dashboard" component={Dashboard} />

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
        <Route path="/add" component={AddEvent} />
        <Route path="/Login" component={LoginPage} />
        <Route path="/Register" component={RegisterPage} />
      </Switch>
    </BrowserRouter>
    </div>
  );
}

export default App;
