import React from "react";
import { useSelector } from "react-redux";
import { Button } from "reactstrap";
import { useHistory } from "react-router-dom";

function Sports() {
  const history = useHistory();

  const isAuth = useSelector((state) => state.authReducer.isAuth);
  return (
    <div>
      <Button onClick={() => history.push("/")}>Home Page</Button>
      <h1>Sports Page</h1>
      {isAuth ? <h2>Private settings</h2> : null}
      <Button onClick={()=>history.push('/running')}>Running</Button>
<Button onClick={()=>history.push('/biking')}>Biking</Button>
<Button onClick={()=>history.push('/fitness')}>Fitness</Button>
    </div>
  );
}

export default Sports;
