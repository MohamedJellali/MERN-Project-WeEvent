
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Button } from "reactstrap";
import { useHistory } from "react-router-dom";
import EventList from "../EventList";
import { getEvents } from "../../../js/actions/gettingActions";
import ClearIcon from "@material-ui/icons/Clear";

function Charity() {
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

  const [searched, setSearched] = useState("");
  const [dateT, setDateT] = useState();

  return (
    <div
      style={{
        background: "url(https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80)",
        backgroundRepeat: "repeat",
        height: "1300px",
        backgroundSize: "cover",
        // display:'flex',
        // flexWrap: 'wrap',
      }}
    >
      <div
        style={{
          width: "100%",
          height: "100px",
        }}
      ></div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <h1 style={{color:'white'}}>Charity Activities Page</h1>
        <Button onClick={() => history.push("/Home")}>
          Comeback to Home
        </Button>
        <div style={{ display: "flex" }}>
          <input
            type="text"
            placeholder="Search"
            value={searched}
            name="Search"
            style={{ borderRadius: "30px", width: "400px" }}
            onChange={(e) => setSearched(e.target.value)}
          />

          <input
            type="date"
            style={{ borderRadius: "30px", width: "200px" }}
            placeholder="date"
            value={dateT}
            name="date"
            onChange={(e) => setDateT(e.target.value)}
          />
          <Button
            style={{
              backgroundColor: "transparent",
              backgroundRepeat: "no-repeat",
              border: "none",
              cursor: "pointer",
              overflow: "hidden",
              outline: "none",
              color: "black",
            }}
            onClick={() => {
              setDateT();
              setSearched("");
            }}
          >
            <ClearIcon />
          </Button>
        </div>
        <div>
          <EventList activity="Charity" searched={searched} dateT={dateT} />
        </div>
      </div>
    </div>
  );
}

export default Charity;