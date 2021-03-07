import React, { useState, useEffect } from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { login } from "../../js/actions/authActions";
import CompareArrowsIcon from "@material-ui/icons/CompareArrows";
import ConfirmModal from "../pages/ModalAlert";

const LoginPageAdd = (props) => {
  // const error = useSelector((state) => state.authReducer.error)
  // console.log(error)
  // const events = useSelector((state) => state.gettingReducer.events);

  const isAuth = useSelector((state) => state.authReducer.isAuth);

  const dispatch = useDispatch();
  let history = useHistory();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleFormChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

    

    // const ppush = () => {
    //  setTimeout(() => {
    //     history.push('/')
    //   }, 500);
    // }

  const handleConfim = () => {
    dispatch(login(formData));
  };
if(isAuth){
    history.push('/add');
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
          height: "280px",
          borderRadius: "20px",
        }}
      >
        <div>
          <Form>
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
            // onClick={async () => {await handleConfim}}
            onClick={handleConfim}
          >
            <CompareArrowsIcon />
            Login
          </Button>
        </div>
      </div>
    </div>
  );
};

export default LoginPageAdd;

