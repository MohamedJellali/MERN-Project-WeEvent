import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { getEvents } from "../../js/actions/gettingActions";
import EventCard from "./EventCard";

function EventList(props) {
  const dispatch = useDispatch();
  const getAllEvents = () => {
    dispatch(getEvents());
  };
  const events = useSelector((state) => state.gettingReducer.events);
  useEffect(() => {
    getAllEvents();
  }, []);

  return (
    <div
      className="list"
      style={{
        display: "flex",
        justifyContent: "space-around",
        flexWrap: "wrap",
        margin: "80px 80px 40px 80px",
        width: "1100px",
        // backgroundColor: "#FFCE01",
      }}
    >
      {console.log("hhhh", events)}
      {console.log("participate", events[0])}

      {events.reverse().map((event) =>
        event.activity == props.activity ? (
          <EventCard key={event.id} event={event} />
        ) : null
      )}
    </div>
  );
}

export default EventList;
