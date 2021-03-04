import React, { useState } from "react";
import {
//   Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
  FormGroup,
  Label,
  Input,
} from "reactstrap";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { unpdateEvent } from "../../js/actions/gettingActions";

import CreateIcon from "@material-ui/icons/Create";
import { makeStyles } from "@material-ui/core/styles";
import Button from '@material-ui/core/Button';


const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
}));

const UpdateEventModal = ({ event }) => {
    //material ui
    const classes = useStyles();

  //   const history = useHistory();
  const dispatch = useDispatch();
  const [modal, setModal] = useState(false);
  const [formData, setFormData] = useState({
    _id: event._id,
    nameOfEvent: event.nameOfEvent,
    description: event.description,
    category: event.category,
    activity: event.activity,
    address: event.address,
    city: event.city,
    governorate: event.governorate,
    date: event.date,
  });

  const handleFormChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleConfim = () => {
    dispatch(unpdateEvent(formData));
  };

  const toggle = () => setModal(!modal);

  return (
    <div>

      <Button
        variant="contained"
        color="primary"
        className={classes.button}
        startIcon={<CreateIcon />}
        onClick={toggle}
      >
        Update
      </Button>

      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Update</ModalHeader>
        <ModalBody>
          <Form>
            <FormGroup>
              <Label for="name">Name of event</Label>
              <Input
                onChange={handleFormChange}
                defaultValue={event.nameOfEvent}
                type="text"
                name="nameOfEvent"
              />
            </FormGroup>
            <FormGroup>
              <Label for="name">Description</Label>
              <Input
                onChange={handleFormChange}
                defaultValue={event.description}
                type="text"
                name="description"
              />
            </FormGroup>

            <Input
              defaultValue={event.category}
              type="select"
              className="col-sm"
              name="category"
              onChange={handleFormChange}
            >
              <option>Select category</option>
              <option>Sports</option>
              <option>Outdoors</option>
              <option>Arts</option>
            </Input>
            <Input
              defaultValue={event.activity}
              type="select"
              className="col-sm"
              name="activity"
              onChange={handleFormChange}
            >
              <option>Select activity</option>
              <option>Running</option>
              <option>Biking</option>
              <option>Fitness</option>
            </Input>
            <input
              defaultValue={event.address}
              type="text"
              className="col form-control"
              name="address"
              onChange={handleFormChange}
            />
            <input
              defaultValue={event.city}
              type="text"
              className="col form-control"
              name="city"
              onChange={handleFormChange}
            />
            <Input
              defaultValue={event.governorate}
              type="select"
              className="col-sm"
              name="governorate"
              onChange={handleFormChange}
            >
              <option>Select governorate</option>
              <option>Tunis</option>
              <option>Sousse</option>
              <option>Sfax</option>
            </Input>
            <input
              defaultValue={event.date}
              type="datetime-local"
              className="col form-control"
              name="date"
              onChange={handleFormChange}
            />
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button
            color="primary"
            onClick={() => {
              handleConfim();
              console.log("ffff", formData);
              toggle();
            }}
          >
            Confirm
          </Button>{" "}
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default UpdateEventModal;
