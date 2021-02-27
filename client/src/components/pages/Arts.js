import React from "react";
import { useSelector } from "react-redux";
import { Button } from "reactstrap";
import { useHistory } from "react-router-dom";

function Arts() {
  const isAuth = useSelector((state) => state.authReducer.isAuth);
  const history = useHistory();

  return (
    <div>
      <Button onClick={() => history.push("/")}>Home Page</Button>
      <h1>Arts page</h1>
      {isAuth ? <h2>Private settings</h2> : null}
      <Button onClick={() => history.push("/painting")}>Painting</Button>
      <Button onClick={() => history.push("/review")}>Reviewing books</Button>
    </div>
  );
}

export default Arts;
