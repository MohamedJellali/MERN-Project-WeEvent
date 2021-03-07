import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import { Link, useHistory } from "react-router-dom";
import SportsKabaddiTwoToneIcon from "@material-ui/icons/SportsKabaddiTwoTone";
import FilterHdrTwoToneIcon from "@material-ui/icons/FilterHdrTwoTone";
import BrushTwoToneIcon from "@material-ui/icons/BrushTwoTone";
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import AccessibilityNewIcon from '@material-ui/icons/AccessibilityNew';
import brand from "../../photos/logo.png";

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: "auto",
  },
});

export default function DrawerComponent() {
  const history = useHistory();
  const classes = useStyles();
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === "top" || anchor === "bottom",
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <ListItem>
          <Link
            style={{
              textDecoration: "none",
              color: "white",
              fontSize: "25px",
            }}
            to="/"
          >
            <img
              width="150px"
              height="45px"
              className="img-responsive"
              src={brand}
              alt="logo"
            />
          </Link>
        </ListItem>

        {/* {['Sports', 'Outdoors', 'Camping/Hiking', 'Charity'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))} */}
      </List>
      <Divider />
      <List>
        <ListItem>
          <Button onClick={() => history.push("/sports")}>
            {" "}
            <SportsKabaddiTwoToneIcon /> Sports
          </Button>
        </ListItem>
        <ListItem style={{marginLeft:'30px'}}>
          <Button onClick={() => history.push("/running")}>
            {" "}
            <ArrowForwardIosIcon style={{fontSize: '13px'}}/> Running
          </Button>
        </ListItem>
        <ListItem style={{marginLeft:'30px'}}>
          <Button onClick={() => history.push("/fitness")}>
            {" "}
            <ArrowForwardIosIcon style={{fontSize: '13px'}}/> Fitness
          </Button>
        </ListItem>
        <ListItem style={{marginLeft:'30px'}}>
          <Button onClick={() => history.push("/biking")}>
            {" "}
            <ArrowForwardIosIcon style={{fontSize: '13px'}}/> Biking
          </Button>
        </ListItem>


        <ListItem>
          <Button onClick={() => history.push("/outdoor")}>
            {" "}
            <FilterHdrTwoToneIcon /> Outdoors
          </Button>
        </ListItem>

        <ListItem style={{marginLeft:'30px'}}>
          <Button onClick={() => history.push("/hikingCamping")}>
            {" "}
            <ArrowForwardIosIcon style={{fontSize: '13px'}}/> Camping/Hiking
          </Button>
        </ListItem>
        <ListItem style={{marginLeft:'30px'}}>
          <Button onClick={() => history.push("/yoga")}>
            {" "}
            <ArrowForwardIosIcon style={{fontSize: '13px'}}/> Yoga/Meditation
          </Button>
        </ListItem>


        <ListItem>
          <Button onClick={() => history.push("/arts")}>
            {" "}
            <BrushTwoToneIcon /> Arts
          </Button>
        </ListItem>

        <ListItem style={{marginLeft:'30px'}}>
          <Button onClick={() => history.push("/painting")}>
            {" "}
            <ArrowForwardIosIcon style={{fontSize: '13px'}}/> Painting
          </Button>
        </ListItem>
        <ListItem style={{marginLeft:'30px'}}>
          <Button onClick={() => history.push("/review")}>
            {" "}
            <ArrowForwardIosIcon style={{fontSize: '13px'}}/> Books Reviews
          </Button>
        </ListItem>

        <ListItem>
          <Button onClick={() => history.push("/charity")}>
            {" "}
            <AccessibilityNewIcon /> Charity
          </Button>
        </ListItem>



      </List>
    </div>
  );

  return (
    <div>
      {["menu"].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
