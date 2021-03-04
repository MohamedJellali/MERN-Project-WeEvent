import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Button } from "reactstrap";
import { useHistory } from "react-router-dom";
import EventList from "../EventList";
import { getEvents } from "../../../js/actions/gettingActions";

function Running() {
  const history = useHistory();
  const isAuth = useSelector((state) => state.authReducer.isAuth);
  const dispatch = useDispatch();

  const getAllEvents = () => {
    dispatch(getEvents());
  };
  const events = useSelector((state) => state.events);

  useEffect(() => {
    getAllEvents();
  }, []);

  return (
    <div
      style={{
        background: "url(https://wallpapercave.com/wp/wp3734551.jpg)",
        backgroundRepeat: "repeat",
        height: "100%",
        backgroundSize: "cover",
      }}
    >
      <div
      style={{
        width: "100%",
        height: "100px",
      }}
      ></div>
      <div style ={{ display:'flex', flexDirection:'column', alignItems:'center'}}>
      <Button onClick={() => history.push("/sports")}>
        Comeback to Sports Page
      </Button>
      <Button
        onClick={() =>
          isAuth
            ? history.push("/add")
            : alert("please login to could add an event")
        }
      >
        Creat Event
      </Button>
      <h1 style={{color:'white'}}>Running Activities Page</h1>
      <EventList activity="Running" />

      {/* {isAuth ? 
      <Button onClick={() => history.push('/add')}>Creat Event</Button>
      : null} */}
      </div>
    </div>
  );
}

export default Running;
