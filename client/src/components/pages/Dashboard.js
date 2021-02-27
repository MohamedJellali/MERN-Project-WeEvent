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
import CreateIcon from '@material-ui/icons/Create';
import Button from "@material-ui/core/Button";
import UpdateEventModal from "./UpdateEventModal"


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
        <Button onClick={() => history.push("/")}>Home Page</Button>
        <h1>
          Admin {user.name} {user.lastName} : {user.email}
        </h1>
        <h3>Members List : </h3>
        {console.log("hhhh", users)}
        {users.map((user) =>
          user.role != "admin" ? (
            <ProfileCard key={user.id} user={user} />
          ) : null
        )}
        <h4>My Events Created</h4>
        {events.map((event) =>
          event.organizer == `${user.name} ${user.lastName}` ? (
            <div>
              <EventCard key={event.id} event={event} />
              <Button
                variant="contained"
                color="red"
                className={classes.button}
                startIcon={<DeleteIcon />}
                onClick={() => {
                  dispatch(deleteEvent(event._id));
                }}
              >
                Delete
              </Button>
              
              {/* <Button
                variant="contained"
                color="red"
                className={classes.button}
                startIcon={<CreateIcon />}
                onClick={() => <UpdateEventModal event={event} /> }
              >
                Modify
              </Button> */}
              <UpdateEventModal event={event} />
            </div>
          ) : null
        )}

        <h4>My Events that i participated in</h4>
        {events.map((event) =>
          event.participant.includes(user._id) ? (
            <div>
              <EventCard key={event.id} event={event} />
              <Button
                variant="contained"
                color="red"
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

        <h4>All Events : </h4>
        {events.map((event) =>
          true ? (
            <div>
              <EventCard key={event.id} event={event} />
              <Button
                variant="contained"
                color="red"
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
              color="red"
              className={classes.button}
              startIcon={<DeleteIcon />}
              onClick={() => {
                dispatch(deleteEvent(event._id));
              }}
            >
              Delete
            </Button>
            <UpdateEventModal event={event} />
            {/* <Button
                variant="contained"
                color="red"
                className={classes.button}
                startIcon={<CreateIcon />}
                // onClick={() => {
                //   dispatch(deleteEvent(event._id));
                // }}
              >
                Modify
              </Button> */}
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
