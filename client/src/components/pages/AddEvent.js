import React, { useState } from "react";
import { FormGroup, Label, Input, FormText } from "reactstrap";
import { addEvent } from "../../js/actions/addEventActions";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import ModalAlert from "./ModalAlert";
import { Alert } from "react-st-modal";


function AddEvent() {
  const user = useSelector((state) => state.authReducer.user);
  const history = useHistory();
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    nameOfEvent: "",
    description: "",
    category: "",
    activity: "",
    address: "",
    city: "",
    governorate: "",
    date: "",
    organizer: `${user.name} ${user.lastName}`,
    participant: [`${user._id}`],
  });

  const intializeData = () => {
    setFormData({
      nameOfEvent: "",
      description: "",
      category: "",
      activity: "",
      address: "",
      city: "",
      governorate: "",
      date: "",
      organizer: `${user.name} ${user.lastName}`,
      participant: [`${user._id}`, "test"],
    });
  };

  const verifyEmpty = (obj) => {
    let s = 0;
    for (let i = 0; i < 8; i++) {
      let arr = Object.values(obj);
      if (arr[i] === "") {
        s++;
      }
    }
    return s;
  };

  const handleFormChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });
  {
    console.log(verifyEmpty(formData));
  }
  const handleAddClick = () => {
    if (verifyEmpty(formData) != 0) {
      // <ModalAlert text={"Please fullfill all fields"} />
      Alert("Please fullfill all fields", "Alert");
    } else if (formData.description.length < 12) {
      Alert("please describe the event in more than 12 characters", "Alert");
    } else {
      dispatch(addEvent(formData));
      history.push(`${formData.activity}`);
      intializeData();
    }
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        background:
          "url(https://images.unsplash.com/photo-1525026198548-4baa812f1183?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=933&q=80)",
          // backgroundRepeat: "repeat",
          height: "100%",
          backgroundSize: "cover",
        }}
    >
      <div
        style={{
          width: "100%",
          height: "100px",
        }}
      ></div>
      <div style={{backgroundColor:"rgba(255,255,255,0.8)", borderRadius:'10px',}}>
      <h1>Create an event</h1>
      <div
        className="row m-2"
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          width: "400px",
        }}
      >
        <Label for="nameOfEvent" style={{fontWeight: "bolder",}}>Title</Label>
        <input
          value={formData.nameOfEvent}
          type="text"
          className="col form-control"
          placeholder="Name of event"
          name="nameOfEvent"
          onChange={handleFormChange}
        />
        <Label for="description" style={{fontWeight: "bolder",}}>Description</Label>
        <Input
          value={formData.description}
          type="text"
          // className="col form-control"
          placeholder="description"
          name="description"
          onChange={handleFormChange}
          style={{ height: "100px" }}
        />
        <Label for="Category" style={{fontWeight: "bolder",}}>Category</Label>
        <Input
          value={formData.category}
          type="select"
          placeholder="category"
          className="col-sm"
          name="category"
          onChange={handleFormChange}
        >
          <option></option>
          <option>Sports</option>
          <option>Outdoors</option>
          <option>Arts</option>
          <option>Charity</option>
        </Input>
        <Label for="Activity" style={{fontWeight: "bolder",}}>Activity</Label>
        <Input
          value={formData.activity}
          type="select"
          placeholder="Activity"
          className="col-sm"
          name="activity"
          onChange={handleFormChange}
        >
          <option></option>
          <option>Running</option>
          <option>Biking</option>
          <option>Fitness</option>
          <option>Camping/Hiking</option>
          <option>Yoga/Meditation</option>
          <option>Fitness</option>
          <option>Painting</option>
          <option>BooksReviews</option>
          <option>Charity</option>
        </Input>
        <Label for="address" style={{fontWeight: "bolder",}}>Address</Label>
        <input
          value={formData.address}
          type="text"
          className="col form-control"
          placeholder="address"
          name="address"
          onChange={handleFormChange}
        />
        <Label for="city" style={{fontWeight: "bolder",}}>City</Label>
        <input
          value={formData.city}
          type="text"
          className="col form-control"
          placeholder="City"
          name="city"
          onChange={handleFormChange}
        />
        <Label for="governorate" style={{fontWeight: "bolder",}}>Governorate</Label>
        <Input
          value={formData.governorate}
          type="select"
          placeholder="Governorate"
          className="col-sm"
          name="governorate"
          onChange={handleFormChange}
        >
          <option></option>
          <option>Ariana</option>
          <option>Beja</option>
          <option>Ben Arous</option>
          <option>Bizerte</option>
          <option>Gabes</option>
          <option>Gafsa</option>
          <option>Jandouba</option>
          <option>Kairouan</option>
          <option>Kasserine</option>
          <option>Kébili</option>
          <option>Kef</option>
          <option>Mahdia</option>
          <option>Manouba</option>
          <option>Medenin</option>
          <option>Monastir</option>
          <option>Nabeul</option>
          <option>Sfax</option>
          <option>Sidi Bouzid</option>
          <option>Siliana</option>
          <option>Sousse</option>
          <option>Tataouine</option>
          <option>Tozeur</option>
          <option>Tunis</option>
          <option>Zaghouan</option>
        </Input>
        <Label for="date" style={{fontWeight: "bolder",}}>Date/Time</Label>
        <input
          value={formData.date}
          type="datetime-local"
          className="col form-control"
          placeholder="date"
          name="date"
          onChange={handleFormChange}
        />

        {/* <FormGroup>
          <Label for="exampleFile">Please add photo to the event</Label>
          <Input type="file" name="file" id="exampleFile" />
          <FormText color="muted">
            This is some placeholder block-level help text for the above input.
          </FormText>
        </FormGroup> */}
        <div>
          {console.log("the created event", formData)}
          <button className="btn btn-primary mx-2" onClick={handleAddClick}>
            ADD EVENT
          </button>{" "}
        </div>
        </div>
      </div>
    </div>
  );
}

export default AddEvent;
