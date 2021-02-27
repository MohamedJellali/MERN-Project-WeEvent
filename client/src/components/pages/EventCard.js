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

export default function EventCard({ event }) {
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

  // /!\ PROBLEM MUST RESOLVED !!!!!!!!
  const [toggle, setToggle] = useState(
    !user ? false : event.participant.includes(user._id)
  );
  //   const [toggle, setToggle] = useState(false);

  const dispatch = useDispatch();
  const participateToEvent = () => {
    if (!user) {
      alert("please login to participate");
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

  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    if (!user) {
      alert("please login to show the event information");
    } else {
      setExpanded(!expanded);
    }
  };

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            {event.organizer.charAt(0)}
          </Avatar>
        }
        action={
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
        }
        title={event.city}
        subheader={convertTimeHeader(event.date)}
      />
      <CardMedia
        className={classes.media}
        image="https://www.gracepointwellness.org/images/root/carriehandstogether.jpg"
        title="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          <h4>{event.nameOfEvent}</h4>
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
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
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
          <h6>More</h6>
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Description:</Typography>
          <Typography paragraph>{event.description}</Typography>
          <Typography paragraph>Time : </Typography>
          <Typography paragraph>{convertTimeMore(event.date)}</Typography>
          <Typography paragraph>Address : </Typography>
          <Typography paragraph>
            `{event.address} à {event.city} - {event.governorate}`
          </Typography>
          <Typography>Nbr of Participants :</Typography>
          <Typography>{event.participant.length}</Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
// }

// import React from 'react'

// function EventCard({event}) {
//     return (
//         <div>
//             <h3>{event.nameOfEvent}</h3>
//         </div>
//     )
// }

// export default EventCard
