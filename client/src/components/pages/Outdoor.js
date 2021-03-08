import React from "react";
import { useSelector } from "react-redux";
import { Button } from "reactstrap";
import { useHistory } from "react-router-dom";

function Outdoor() {
  const history = useHistory();

  const isAuth = useSelector((state) => state.authReducer.isAuth);
  return (
    <div
      style={{
        background:
          "url(https://images.unsplash.com/photo-1563299796-17596ed6b017?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80)",
        backgroundRepeat: "repeat",
        height: "750px",
        backgroundSize: "cover",
      }}
    >
      <div
        style={{
          width: "100%",
          height: "150px",
        }}
      ></div>

      {/* <Button onClick={() => history.push("/")}>Home Page</Button> */}
      <h1 style={{color:'white'}}>Outdoors Community</h1>
      {/* {isAuth ? <h2>Private settings</h2> : null} */}
      <Button onClick={() => history.push("/campinghiking")}>Camping/Hiking</Button>
      <Button onClick={() => history.push("/yoga")}>Yoga/Meditation</Button>
    </div>
  );
}

export default Outdoor;
