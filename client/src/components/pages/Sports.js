import React from "react";
import { useSelector } from "react-redux";
import { Button } from "reactstrap";
import { useHistory } from "react-router-dom";

function Sports() {
  const history = useHistory();

  const isAuth = useSelector((state) => state.authReducer.isAuth);
  return (
    <div
      style={{
        background:
          "url(https://images.unsplash.com/photo-1591311630200-ffa9120a540f?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=998&q=80)",
        backgroundRepeat: "repeat",
        height: "800px",
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
      <h1 style={{color:'white'}}>Sports Community</h1>
      {/* {isAuth ? <h2>Private settings</h2> : null} */}
      <Button onClick={() => history.push("/running")}>Running</Button>
      <Button onClick={() => history.push("/biking")}>Biking</Button>
      <Button onClick={() => history.push("/fitness")}>Fitness</Button>
    </div>
  );
}

export default Sports;
