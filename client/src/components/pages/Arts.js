import React from "react";
import { useSelector } from "react-redux";
import { Button } from "reactstrap";
import { useHistory } from "react-router-dom";

function Arts() {
  const history = useHistory();

  const isAuth = useSelector((state) => state.authReducer.isAuth);
  return (
    <div
      style={{
        background:
          "url(https://images.unsplash.com/photo-1600693437693-e3eb10df2677?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1951&q=80)",
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
      <h1>Arts Community</h1>
      {/* {isAuth ? <h2>Private settings</h2> : null} */}
      <Button onClick={() => history.push("/painting")}>Painting</Button>
      <Button onClick={() => history.push("/review")}>Reviewing Books</Button>
    </div>
  );
}

export default Arts;
