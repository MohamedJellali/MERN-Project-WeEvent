import React, { useState } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
  FormGroup,
  Label,
  Input,
} from "reactstrap";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { register } from "../../js/actions/authActions";

const RegisterPage = (props) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [modal, setModal] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    lastName: "",
    email: "",
    password: "",
  });

  const isAuth = useSelector((state) => state.authReducer.isAuth);

  const handleFormChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleConfim = async () => {
    dispatch(register(formData));
  };

  if(isAuth){
    history.push('/');
}
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "750px",
        background:
          "url(https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80)",
        // backgroundRepeat: "repeat",
        backgroundSize: "cover",
      }}
    >
      <div
        style={{
          backgroundColor: "rgba(255,255,255,0.5)",
          //   backgroundColor: "rgba(0,0,0,0.8)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          width: "400px",
          height: "480px",
          borderRadius: "20px",
        }}
      >
        <div>
          <Form>
            <FormGroup style={{ width: "300px" }}>
              <Label for="name">Name</Label>
              <Input
                onChange={handleFormChange}
                type="text"
                name="name"
                id="name"
                placeholder="Enter your name ...."
              />
            </FormGroup>
            <FormGroup style={{ width: "300px" }}>
              <Label for="lastName">Last Name</Label>
              <Input
                onChange={handleFormChange}
                type="text"
                name="lastName"
                id="lastName"
                placeholder="Enter your last name ...."
              />
            </FormGroup>
            <FormGroup style={{ width: "300px" }}>
              <Label for="exampleEmail">Email</Label>
              <Input
                onChange={handleFormChange}
                type="email"
                name="email"
                id="exampleEmail"
                placeholder="Enter your Email..."
              />
            </FormGroup>
            <FormGroup style={{ width: "300px" }}>
              <Label for="password">password</Label>
              <Input
                onChange={handleFormChange}
                type="password"
                name="password"
                id="password"
                placeholder="Enter your password..."
              />
            </FormGroup>
          </Form>
        </div>
        <div>
          <Button
            style={{
              backgroundColor: "white",
              backgroundRepeat: "no-repeat",
              border: "none",
              cursor: "pointer",
              overflow: "hidden",
              outline: "none",
              color: "black",
            }}
            color="primary"
            onClick={() => {
              handleConfim();
            }}
          >
            Confirm
          </Button>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
