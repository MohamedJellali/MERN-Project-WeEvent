import React, { Fragment } from "react";
import { Navbar, NavbarBrand, Nav, NavItem, Button } from "reactstrap";
import { useSelector, useDispatch } from "react-redux";

import Register from "./auth/Register";
import Login from "./auth/Login";
import { Link, useHistory } from "react-router-dom";
import { logout } from "../js/actions/authActions";
import {useEffect} from 'react'
import { getAuthUser } from "../js/actions/authActions";
 

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
    <Navbar className="d-flex justify-content-between" color="dark" dark>
      <NavbarBrand
        tag={() => (
          <Link
            style={{ textDecoration: "none", color: "white", fontSize: "25px" }}
            to="/"
          >
            My Web Site
          </Link>
        )}
      />
      <Nav
        className="text-white"
      >
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
  );
};

export default AppNavbar;
