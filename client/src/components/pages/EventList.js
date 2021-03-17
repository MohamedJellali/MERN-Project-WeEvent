import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { getEvents } from "../../js/actions/gettingActions";
import EventCard from "./EventCard";
import "./Eventlist.css";
import { paginate } from "../../pagination/paginate";
import Pagination from "../../pagination/pagination";

function EventList({ activity, searched, dateT }) {
  function convertTime(time) {
    let year = time.slice(0, 4);
    let month = time.slice(5, 7);
    let day = time.slice(8, 10);
    return day + "/" + month + "/" + year;
  }
  const dispatch = useDispatch();
  const getAllEvents = () => {
    dispatch(getEvents());
  };
  const events = useSelector((state) => state.gettingReducer.events);
  useEffect(() => {
    getAllEvents();
  }, []);

  //pagination

  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 6;

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };
  const test = events
    .filter((event) =>
      event.activity == activity).map((event) =>
        <EventCard key={event.id} event={event} />
    )
    .reverse(); 
  const getPageData = () => {
    const paginationData = paginate(test, currentPage, pageSize);
    return {
      totalCount: test.length, 
      data: paginationData,
    };
  };

  const { totalCount, data } = getPageData();

  //pagination

  if (dateT && searched) {
    return (
      <div className="affichage">
        {events
          .filter((event) => convertTime(event.date) == convertTime(dateT))
          .filter(
            (event) =>
              event.organizer.toLowerCase().includes(searched.toLowerCase()) ||
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
        <div className="foot">
          <h2></h2>
        </div>
      </div>
    );
  } else if (dateT) {
    return (
      <div className="affichage">
        {console.log(convertTime(dateT))}
        {events
          .filter((event) => convertTime(event.date) == convertTime(dateT))
          .map((event) =>
            event.activity == activity ? (
              <EventCard key={event.id} event={event} />
            ) : null
          )
          .reverse()}
        <div className="foot">
          <h2></h2>
        </div>
      </div>
    );
  } else if (searched) {
    return (
      <div
        className="affichage"
      >
        {events
          .filter(
            (event) =>
              event.organizer.toLowerCase().includes(searched.toLowerCase()) ||
              event.nameOfEvent
                .toLowerCase()
                .includes(searched.toLowerCase()) ||
              event.city.toLowerCase().includes(searched.toLowerCase())
          )
          .map((event) =>
            event.activity == activity ? (
              <EventCard key={event.id} event={event} />
            ) : null
          )
          .reverse()}
        <div className="foot">
          <h2></h2>
        </div>
      </div>
    );
  }
  return (
    <div>
      <div className="affichage">
        {data}
      </div>
      <div>
        <Pagination
          itemsCount={totalCount}
          pageSize={pageSize}
          currentPage={currentPage}
          onPageChange={handlePageChange}
        />
        page {currentPage} of {Math.ceil(totalCount / pageSize)}
      </div>
    </div>
  );
}

export default EventList;
