import React from "react";
import { useSelector } from "react-redux";
import { Button } from "reactstrap";
import { useHistory } from "react-router-dom";

function Painting() {
  const history = useHistory();

  const isAuth = useSelector((state) => state.authReducer.isAuth);
  return (
    <div>
      <Button onClick={() => history.push("/arts")}>Arts Page</Button>
      <h1>Painting Activities Page</h1>
      {isAuth ? <h2>Private settings</h2> : null}
    </div>
  );
}

export default Painting;
