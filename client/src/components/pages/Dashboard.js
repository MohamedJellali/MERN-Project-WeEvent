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
import "./Dashboard.css";
import Board from "../../photos/board.PNG";

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
}));

const Dashboard = () => {
  const [affichage, setAffichage] = useState(1);
  const [categ, setCateg] = useState("");

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

  const [searched, setSearched] = useState("");
  // delete event
  // const deleteEventFunc = () => {
  //   dispatch(deleteEvent(event._id));
  // };

  if (!user) {
    return <h1>Spinner.....</h1>;
  } else if (user.role == "admin") {
    return (
      <div
        className="list"
        style={{
          // backgroundRepeat: "repeat",
          backgroundColor: "white",
          // backgroundColor: "#C8C6C4",
          height: "100%",
          backgroundSize: "cover",
          // display:'flex',
          // flexWrap: 'wrap',
        }}
      >
        <div
          style={{
            backgroundImage: "url(" + Board + ")",
            width: "100%",
            height: "150px",
          }}
        ></div>
        <div style={{backgroundColor:'#C0C0C0'}}>
        <Button onClick={() => history.push("/")}>Home Page</Button>
        <Button onClick={() => setAffichage(1)}>Users</Button>
        <Button onClick={() => setAffichage(2)}>Created Events</Button>
        </div>
        {affichage == 2 ? 
        <div style={{backgroundColor:'#DCDCDC',}}>
          <Button onClick={() => setCateg("Running")}>Running</Button>
          <Button onClick={() => setCateg("Fitness")}>Fitness</Button>
          <Button onClick={() => setCateg("Biking")}>Biking</Button>
          <Button onClick={() => setCateg("Camping/Hiking")}>
            Camping/Hiking
          </Button>
          <Button onClick={() => setCateg("Yoga")}>
            Yoga/Meditation
          </Button>
          <Button onClick={() => setCateg("Painting")}>Painting</Button>
          <Button onClick={() => setCateg("BooksReviews")}>
            Books Reviews
          </Button>
          <Button onClick={() => setCateg("Charity")}>Charity</Button>
          </div>
:null}

        <h1>
         Welcome Admin {user.name} {user.lastName}
        </h1>
        {affichage == 1 ? (
          <div>
            {" "}
            <h3>Members List : </h3>
            <input
            type="text"
            placeholder="Search"
            value={searched}
            name="Search"
            style={{ borderRadius: "30px", width: "400px" }}
            onChange={(e) => setSearched(e.target.value)}
          />
            <div
              style={{
                display: "flex",
                justifyContent: "space-around",
                flexWrap: "wrap",
                margin: "20px 80px 40px 80px",
              }}
            >
              {users.filter(
            (user) =>
              user.name
                .toLowerCase()
                .includes(searched.toLowerCase()) || user.lastName.toLowerCase().includes(searched.toLowerCase())
          ).map((user) =>
                user.role != "admin" ? (
                  <ProfileCard key={user.id} user={user} />
                ) : null
              )}
            </div>
          </div>
        ) : (
          <div>
            {" "}
            <h3>Your Created Events : </h3>
            {<h4>{categ}</h4>}
            <div
              style={{
                display: "flex",
                justifyContent: "space-around",
                flexWrap: "wrap",
                margin: "80px 80px 40px 80px",
              }}
            >
              {!categ ? (
                <div style={{height:'500px'}}><h4>Please Choose an activity to display your activities</h4></div>
              ) : null}

              {events
                .filter((event) => event.activity == categ)
                .map((event) =>
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
          </div>
        )}
      </div>
    );
  }
  return (
    <div
      className="list"
      style={{
        // backgroundRepeat: "repeat",
        // backgroundColor: "#C8C6C4",
        backgroundColor: "white",
        height: "100%",
        backgroundSize: "cover",
        // display:'flex',
        // flexWrap: 'wrap',
      }}
    >
      <div
        style={{
          backgroundImage: "url(" + Board + ")",
          width: "100%",
          height: "150px",
        }}
      ></div>
      <div style={{backgroundColor:'#C0C0C0'}}>
      <Button onClick={() => history.push("/")}>Home Page</Button>
      <Button onClick={() => setAffichage(1)}>Participated in</Button>
      <Button onClick={() => setAffichage(2)}>Created Events</Button>
</div>
<div style={{backgroundColor:'#DCDCDC',}}>
          <Button onClick={() => setCateg("Running")}>Running</Button>
          <Button onClick={() => setCateg("Fitness")}>Fitness</Button>
          <Button onClick={() => setCateg("Biking")}>Biking</Button>
          <Button onClick={() => setCateg("Camping/Hiking")}>
            Camping/Hiking
          </Button>
          <Button onClick={() => setCateg("Yoga")}>
            Yoga/Meditation
          </Button>
          <Button onClick={() => setCateg("Painting")}>Painting</Button>
          <Button onClick={() => setCateg("BooksReviews")}>
            Books Reviews
          </Button>
          <Button onClick={() => setCateg("Charity")}>Charity</Button>
          </div>
      <h1>
        Welcome {user.name} {user.lastName}
      </h1>

      {affichage == 2 ? (
        <div>
          <h3> Your Created Events :</h3>
          {<h4>{categ}</h4>}
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              flexWrap: "wrap",
              margin: "80px 80px 40px 80px",
            }}
          >
            {!categ ? (
              <h4>Please Choose an activity to display your activities</h4>
            ) : null}
            {events
              .filter((event) => event.activity == categ)
              .map((event) =>
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
        </div>
      ) : (
        <div>
          {" "}
          <h3>Your Participations in : </h3>
          {<h4>{categ}</h4>}
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              flexWrap: "wrap",
              margin: "80px 80px 40px 80px",
            }}
          >
            {!categ ? (
              <div style={{height:'500px'}}><h4>Please Choose an activity to display your activities</h4></div>
            ) : null}
            {events
              .filter((event) => event.activity == categ)
              .map((event) =>
                event.participant.includes(user._id) ? (
                  <EventCard key={event.id} event={event} />
                ) : null
              )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
