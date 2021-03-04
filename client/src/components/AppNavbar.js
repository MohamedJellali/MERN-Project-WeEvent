import React, { Fragment } from "react";
import { Navbar, NavbarBrand, Nav, NavItem, Button } from "reactstrap";
import { useSelector, useDispatch } from "react-redux";

import Register from "./auth/Register";
import Login from "./auth/Login";
import { Link, useHistory } from "react-router-dom";
import { logout } from "../js/actions/authActions";
// import { useEffect } from "react";
// import { getAuthUser } from "../js/actions/authActions";
import brand from "../photos/logo.png";

// import { Container, Row, Col, Card, Form } from "react-bootstrap";
// import "./pages/Sidebar.css";
import SidebarCompnent from "./pages/Sidebar";
import SandwichButton from "./pages/SandwichButton"

const AppNavbar = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const isAuth = useSelector((state) => state.authReducer.isAuth);

  // const getTheUser = () => {
  //   dispatch(getAuthUser());
  // };
  // useEffect(() => {
  //   getTheUser();
  // }, []);

  // const user = useSelector((state) => state.gettingReducer.user);
  // const user = useSelector((state) => state.authReducer.user);

  return (
    <div>
            
      <Navbar
        className="d-flex justify-content-between"
        style={{
          textDecoration: "none",
          backgroundColor: "rgba(255, 255, 255, 0.7)",
          // backgroundColor: "white",
          boxShadow: "0 2px 4px 0 rgba(0,0,0,.2)",
          position: "fixed",
          right: "0",
          left: "0",
          top: "0",
          zIndex: "1030",
        }}
        
        dark
      >
        <SandwichButton/>
        <NavbarBrand
          tag={() => (
            <Link
              style={{
                textDecoration: "none",
                color: "white",
                fontSize: "25px",
              }}
              to="/"
            >
              <img
                width="180px"
                height="50px"
                className="img-responsive"
                src={brand}
                alt="logo"
              />
              {/* WeEvent.com */}
            </Link>
          )}
        />
        {/* <NavItem>
          <Button onClick={() => history.push("/sports")}>Sports</Button>
          <Button onClick={() => history.push("/outdoor")}>Outdoors</Button>
          <Button onClick={() => history.push("/arts")}>Arts</Button>
        </NavItem> */}
        <Nav className="text-white">
          {isAuth ? (
            <Fragment>
              <NavItem className="p-2">
                <Button
                  onClick={() => {
                    dispatch(logout());
                    history.push("/");
                  }}
                  color="light"
                >
                  Logout
                </Button>
              </NavItem>
              <NavItem className="p-2">
                <Button color="light">
                  <Link to={`/dashboard`}>Dashboard</Link>
                  {/* <Link to={`/dashboard/${user.name}${user.lastName}`}>Dashboard</Link> */}
                </Button>
              </NavItem>
            </Fragment>
          ) : (
            <Fragment>
              <NavItem className="p-2">
                <Login />
              </NavItem>
              <NavItem className="p-2">
                <Register />
              </NavItem>
            </Fragment>
          )}
        </Nav>
      </Navbar>
      {/* <SidebarCompnent /> */}
    </div>
  );
};

export default AppNavbar;
