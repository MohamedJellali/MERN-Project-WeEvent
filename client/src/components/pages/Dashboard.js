import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
// import { Button } from "reactstrap";
import { useHistory } from "react-router-dom";

import { getUsers, deleteEvent } from "../../js/actions/gettingActions";
import ProfileCard from "./ProfileCard";

import { getEvents } from "../../js/actions/gettingActions";
import { useState } from "react";
import EventCard from "./EventCard";
import DeleteIcon from "@material-ui/icons/Delete";
import { makeStyles } from "@material-ui/core/styles";
import CreateIcon from "@material-ui/icons/Create";
import Button from "@material-ui/core/Button";
import UpdateEventModal from "./UpdateEventModal";
import './Dashboard.css'

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
}));

const Dashboard = () => {
  //material ui
  const classes = useStyles();

  //use Dispatch redux
  const dispatch = useDispatch();

  //get all users function
  const getAllUsers = () => {
    dispatch(getUsers());
  };
  //getting all users with useeffect
  const users = useSelector((state) => state.gettingReducer.users);
  useEffect(() => {
    getAllUsers();
  }, []);

  //getting the user data
  const history = useHistory();
  const user = useSelector((state) => state.authReducer.user);
  // getting events
  const getAllEvents = () => {
    dispatch(getEvents());
  };

  //getting all events with useeffect
  const events = useSelector((state) => state.gettingReducer.events);
  useEffect(() => {
    getAllEvents();
  }, []);

  // delete event
  // const deleteEventFunc = () => {
  //   dispatch(deleteEvent(event._id));
  // };

  if (!user) {
    return <h1>Spinner.....</h1>;
  } else if (user.role == "admin") {
    return (
      <div className="list">
        <div
          style={{
            background:
              "url(https://ca-times.brightspotcdn.com/dims4/default/bde3030/2147483647/strip/true/crop/2160x300+0+0/resize/1080x150!/quality/90/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2F1a%2F1f%2Fb7c46b154772aabad3b12c020f11%2Fla-coronavirus-love-story-callout-dp-small2.jpg) no-repeat top center",
            width: "100%",
            height: "150px",
          }}
        ></div>
        <Button onClick={() => history.push("/")}>Home Page</Button>
        <h1>
          Admin {user.name} {user.lastName} : {user.email}
        </h1>
        <h3>Members List : </h3>
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            flexWrap: "wrap",
            margin: "80px 80px 40px 80px",
          }}
        >
          {console.log("hhhh", users)}
          {users.map((user) =>
            user.role != "admin" ? (
              <ProfileCard key={user.id} user={user} />
            ) : null
          )}
        </div>
        <h4>My Events Created</h4>
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            flexWrap: "wrap",
            margin: "80px 80px 40px 80px",
          }}
        >
          {events.map((event) =>
            event.organizer == `${user.name} ${user.lastName}` ? (
              <div>
                <EventCard key={event.id} event={event} />
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-around",
                  }}
                >
                  <Button
                    variant="contained"
                    style={{
                      backgroundColor: "#F4364C",
                      color: "#FFFFFF",
                    }}
                    className={classes.button}
                    startIcon={<DeleteIcon />}
                    onClick={() => {
                      dispatch(deleteEvent(event._id));
                    }}
                  >
                    Delete
                  </Button>
                  <UpdateEventModal event={event} />
                </div>
              </div>
            ) : null
          )}
        </div>

        {/* <h4>My Events that i participated in</h4>
        {events.map((event) =>
          event.participant.includes(user._id) ? (
            <div>
              <EventCard key={event.id} event={event} />
              <Button
                variant="contained"
                style={{
                  backgroundColor: "#F4364C",
                  color: "#FFFFFF",
                }}
                className={classes.button}
                startIcon={<DeleteIcon />}
                onClick={() => {
                  dispatch(deleteEvent(event._id));
                }}
              >
                Delete
              </Button>
            </div>
          ) : null
        )} */}

        <h4>All Events : </h4>
        <div className='listCard'>
        {events.map((event) =>
          true ? (
            <div className="itemCardAll">
              <EventCard key={event.id} event={event} />
              <Button
                variant="contained"
                style={{
                  backgroundColor: "#F4364C",
                  color: "#FFFFFF",
                  width: '100px',
                }}
                className={classes.button}
                startIcon={<DeleteIcon />}
                onClick={() => {
                  dispatch(deleteEvent(event._id));
                }}
              >
                Delete
              </Button>
            </div>
          ) : null
        )}
        </div>
      </div>
    );
  }
  return (
    <div>
      <Button onClick={() => history.push("/")}>Home Page</Button>
      <h1>
        Member {user.name} {user.lastName} : {user.email}
      </h1>
      <h4>My Events Created</h4>
      {events.map((event) =>
        event.organizer == `${user.name} ${user.lastName}` ? (
          <div>
            <EventCard key={event.id} event={event} />
            <Button
              variant="contained"
              style={{
                backgroundColor: "#F4364C",
                color: "#FFFFFF",
              }}
              className={classes.button}
              startIcon={<DeleteIcon />}
              onClick={() => {
                dispatch(deleteEvent(event._id));
              }}
            >
              Delete
            </Button>
            <UpdateEventModal event={event} />
          </div>
        ) : null
      )}
      <h4>My Events that i participated in</h4>
      {events.map((event) =>
        event.participant.includes(user._id) ? (
          <EventCard key={event.id} event={event} />
        ) : null
      )}
    </div>
  );
};

export default Dashboard;
