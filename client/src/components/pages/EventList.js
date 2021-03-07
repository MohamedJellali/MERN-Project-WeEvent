import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { getEvents } from "../../js/actions/gettingActions";
import EventCard from "./EventCard";

function EventList({ activity, searched, dateT }) {
  function convertTime (time) {
    let year = time.slice(0, 4);
    let month = time.slice(5, 7);
    let day = time.slice(8, 10);
    return day + "/" + month + "/" + year;
  };
  const dispatch = useDispatch();
  const getAllEvents = () => {
    dispatch(getEvents());
  };
  const events = useSelector((state) => state.gettingReducer.events);
  useEffect(() => {
    getAllEvents();
  }, []);
  if (dateT && searched) {
    return (
      <div
        className="list"
        style={{
          display: "flex",
          justifyContent: "space-around",
          flexWrap: "wrap",
          margin: "20px 80px 40px 80px",
          width: "1100px",
          // backgroundColor: "#FFCE01",
        }}
      >
        {events
          .filter((event) => convertTime(event.date) == convertTime(dateT))
          .filter(
            (event) =>
              event.organizer
                .toLowerCase()
                .includes(searched.toLowerCase()) ||
              event.nameOfEvent
                .toLowerCase()
                .includes(searched.toLowerCase()) ||
              event.city.toLowerCase().includes(searched.toLowerCase())
          )
          .reverse()
          .map((event) =>
            event.activity == activity ? (
              <EventCard key={event.id} event={event} />
            ) : null
          )}
        <div style={{ width: "100%", height: "550px", color: "white" }}>
          <h2></h2>
        </div>
      </div>
    );
  } else if (dateT) {
    return (
      <div
        className="list"
        style={{
          display: "flex",
          justifyContent: "space-around",
          flexWrap: "wrap",
          margin: "20px 80px 40px 80px",
          width: "1100px",
          // backgroundColor: "#FFCE01",
        }}
      >
        {console.log(convertTime(dateT))}
        {events
          .filter((event) => convertTime(event.date) == convertTime(dateT))
          .reverse()
          .map((event) =>
            event.activity == activity ? (
              <EventCard key={event.id} event={event} />
            ) : null
          )}
        <div style={{ width: "100%", height: "550px", color: "white" }}>
          <h2></h2>
        </div>
      </div>
    );
  } else if (searched) {
    return (
      <div
        className="list"
        style={{
          display: "flex",
          justifyContent: "space-around",
          flexWrap: "wrap",
          margin: "20px 80px 40px 80px",
          width: "1100px",
          // backgroundColor: "#FFCE01",
        }}
      >
        {events
          .filter(
            (event) =>
              event.organizer
                .toLowerCase()
                .includes(searched.toLowerCase()) ||
              event.nameOfEvent
                .toLowerCase()
                .includes(searched.toLowerCase()) ||
              event.city.toLowerCase().includes(searched.toLowerCase())
          )
          .reverse()
          .map((event) =>
            event.activity == activity ? (
              <EventCard key={event.id} event={event} />
            ) : null
          )}
        <div style={{ width: "100%", height: "550px", color: "white" }}>
          <h2></h2>
        </div>
      </div>
    );
  }
  return (
    <div
      className="list"
      style={{
        display: "flex",
        justifyContent: "space-around",
        flexWrap: "wrap",
        margin: "20px 80px 40px 80px",
        width: "1100px",
        // backgroundColor: "#FFCE01",
      }}
    >
      {/* {console.log("hhhh", events)}
      {console.log("participate", events[0])} */}

      {events
        .reverse()
        .map((event) =>
          event.activity == activity ? (
            <EventCard key={event.id} event={event} />
          ) : null
        )}
    </div>
  );
}

export default EventList;
