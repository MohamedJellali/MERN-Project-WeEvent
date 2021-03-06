import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import DoneIcon from "@material-ui/icons/Done";
import Button from "@material-ui/core/Button";
import ShareButton from "react-web-share-button";
import DoneAllIcon from "@material-ui/icons/DoneAll";
import CloseIcon from "@material-ui/icons/Close";
import CancelRoundedIcon from "@material-ui/icons/CancelRounded";
import ClearRoundedIcon from "@material-ui/icons/ClearRounded";

import { useDispatch, useSelector } from "react-redux";
import {
  unparticipateFunc,
  participateFunc2,
} from "../../js/actions/gettingActions";
import { getAuthUser } from "../../js/actions/authActions";

import { FacebookShareButton } from "react-share";

import { FacebookShareCount } from "react-share";

import { FacebookIcon, TwitterShareButton, TwitterIcon } from "react-share";

import { Alert } from "react-st-modal";

import Fab from "@material-ui/core/Fab";

import { useHistory, Redirect } from "react-router-dom";

import { getEvents } from "../../js/actions/gettingActions";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

export default function EventPage({ match }) {
  //get all events
  const getAllEvents = () => {
    dispatch(getEvents());
  };

  useEffect(() => {
    getAllEvents();
  }, []);

  const events = useSelector((state) => state.gettingReducer.events);
  const history = useHistory();

  let event = events.find((el) => el._id == match.params.id);

  const convertTimeHeader = (time) => {
    let year = time.slice(0, 4);
    let month = time.slice(5, 7);
    let day = time.slice(8, 10);

    return day + "/" + month + "/" + year;
  };

  const convertTimeMore = (time) => {
    let year = time.slice(0, 4);
    let month = time.slice(5, 7);
    let day = time.slice(8, 10);
    let hour = Number(time.slice(11, 13)).toString();
    let minute = Number(time.slice(14, 16)).toString();
    if (Number(hour) >= 0 && Number(hour) < 10) {
      hour = "0" + hour;
    }
    if (Number(minute) >= 0 && Number(hour) < 10) {
      minute = "0" + minute;
    }

    return day + "/" + month + "/" + year + " at " + hour + ":" + minute;
  };

  const getTheUser = () => {
    dispatch(getAuthUser());
  };
  useEffect(() => {
    getTheUser();
  }, []);

  // const user = useSelector((state) => state.gettingReducer.user);
  const user = useSelector((state) => state.authReducer.user);

  const isAuth = useSelector((state) => state.authReducer.isAuth);
  const [toggle, setToggle] = useState(
    !user ? false : event.participant.includes(user._id)
  );
  //   const [toggle, setToggle] = useState(false);

  const dispatch = useDispatch();
  const participateToEvent = () => {
    if (!user) {
      Alert("please login to participate", "Alert");
    } else if (!toggle) {
      const formData = {
        userId: user._id,
        eventId: event._id,
      };
      dispatch(participateFunc2(formData));
      console.log("done", toggle);
      setToggle(!toggle);
    } else if (toggle) {
      const formData = {
        userId: user._id,
        eventId: event._id,
      };
      dispatch(unparticipateFunc(formData));
      console.log("done unparticipate", toggle);
      setToggle(!toggle);
    }
  };

  const [showDetails, setShowDetails] = useState(false);

  const showdet = () => {
    if (!user) {
      return Alert("please login to show details", "Alert");
    }
    setShowDetails(!showDetails);
  };

  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    if (!user) {
      Alert("please login to show the event information", "Alert");
    } else {
      setExpanded(!expanded);
    }
  };

  if (!event) {
    return <Redirect to="/running" />;
  }
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "750px",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "1200px",
          height: "500px",
        }}
      >
        <div>
          <img
            src="https://blog.mapmyrun.com/wp-content/uploads/2017/01/Why-Solo-Runners-Who-Should-Consider-a-Running-Group.jpg"
            alt="photo"
            height="400px"
          />
        </div>
        <div>
          <IconButton aria-label="share">
            <FacebookShareButton
              url={"http://www.youtube.com"}
              quote={
                "Hello Guys, Let's Event-It, Join me in this wonderful event"
              }
              // hashtag="#Event-it"
              className={classes.socialMediaButton}
            >
              <FacebookIcon size={24} />
            </FacebookShareButton>
          </IconButton>

          <h2> {event.nameOfEvent}</h2>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <h6 style={{ color: "black" }}>
              {" "}
              Organized by : {event.organizer}
            </h6>
            <IconButton aria-label="add to favorites">
              <FavoriteIcon />
            </IconButton>
            <p style={{fontWeight: "bolder",}}>Description:</p> 
            <p>{event.description}</p>
            
            {!isAuth ? (
              <Fab
                variant="extended"
                size="small"
                color="primary"
                aria-label="add"
                className={classes.margin}
                onClick={showdet}
              >
                Show More Details
              </Fab>
            ) : null}
            {(showDetails || isAuth) ? (
              <div>
                <p style={{fontWeight: "bolder",}}>Date/Time :</p>
                {convertTimeMore(event.date)}
                <br/> <p style={{fontWeight: "bolder",}}>Address :</p> 
                {event.address} à {event.city} - {event.governorate}
                <br/> <p style={{fontWeight: "bolder",}}> Nomber of Participants :</p> 
                {event.participant.length}{" "}
              </div>
            ) : null}
            <Button
              variant="contained"
              size="small"
              variant="outlined"
              className={classes.button}
              startIcon={!toggle ? <DoneIcon /> : <DoneAllIcon />}
              color={!toggle ? "primary" : "secondary"}
              onClick={participateToEvent}
            >
              {!toggle ? "Participate" : "Participated"}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
