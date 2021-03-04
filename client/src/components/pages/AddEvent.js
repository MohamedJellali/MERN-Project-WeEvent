import React, { useState } from "react";
import { FormGroup, Label, Input, FormText } from "reactstrap";
import { addEvent } from "../../js/actions/addEventActions";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import ModalAlert from "./ModalAlert";

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
      alert("Please fullfill all fields");
    } else if (formData.description.length < 12) {
      alert("please describe the event in more than 12 characters");
    } else {
      dispatch(addEvent(formData));
      history.push(`${formData.activity}`);
      intializeData();
    }
  };

  return (
    <div>
            <div
        style={{
          background:
            "url(https://ca-times.brightspotcdn.com/dims4/default/bde3030/2147483647/strip/true/crop/2160x300+0+0/resize/1080x150!/quality/90/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2F1a%2F1f%2Fb7c46b154772aabad3b12c020f11%2Fla-coronavirus-love-story-callout-dp-small2.jpg) no-repeat top center",
          width: "100%",
          height: "150px",
        }}
      ></div>
      <h1>Add event Page</h1>
      <div className="row m-2">
        <input
          value={formData.nameOfEvent}
          type="text"
          className="col form-control"
          placeholder="Name of event"
          name="nameOfEvent"
          onChange={handleFormChange}
        />
        <input
          value={formData.description}
          type="text"
          className="col form-control"
          placeholder="description"
          name="description"
          onChange={handleFormChange}
        />
        <Label for="Category">Category</Label>
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
        <Label for="Activity">Activity</Label>
        <Input
          value={formData.activity}
          type="select"
          placeholder="activity"
          className="col-sm"
          name="activity"
          onChange={handleFormChange}
        >
          <option></option>
          <option>Running</option>
          <option>Biking</option>
          <option>Fitness</option>
        </Input>
        <input
          value={formData.address}
          type="text"
          className="col form-control"
          placeholder="address"
          name="address"
          onChange={handleFormChange}
        />
        <input
          value={formData.city}
          type="text"
          className="col form-control"
          placeholder="City"
          name="city"
          onChange={handleFormChange}
        />
        <Label for="governorate">Governorate</Label>
        <Input
          value={formData.governorate}
          type="select"
          placeholder="Governorate"
          className="col-sm"
          name="governorate"
          onChange={handleFormChange}
        >
          <option></option>
          <option>Tunis</option>
          <option>Sousse</option>
          <option>Sfax</option>
        </Input>
        <input
          value={formData.date}
          type="datetime-local"
          className="col form-control"
          placeholder="date"
          name="date"
          onChange={handleFormChange}
        />

        <FormGroup>
          <Label for="exampleFile">Please add photo to the event</Label>
          <Input type="file" name="file" id="exampleFile" />
          <FormText color="muted">
            This is some placeholder block-level help text for the above input.
          </FormText>
        </FormGroup>
        <div>
          {console.log("the created event", formData)}
          <button className="btn btn-primary mx-2" onClick={handleAddClick}>
            ADD EVENT
          </button>{" "}
        </div>
      </div>
    </div>
  );
}

export default AddEvent;
