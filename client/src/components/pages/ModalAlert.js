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
import { login } from "../../js/actions/authActions";
import CompareArrowsIcon from "@material-ui/icons/CompareArrows";

const ConfirmModal = (props) => {
  let history = useHistory();

  const [modal, setModal] = useState(false);

  const handleConfim = () => {
    history.push("/");
  };

  const toggle = () => setModal(!modal);

  return (
    <div>
      <Button
        style={{
          backgroundColor: "Transparent",
          backgroundRepeat: "no-repeat",
          border: "none",
          cursor: "pointer",
          overflow: "hidden",
          outline: "none",
          color: "black",
        }}
        color="primary"
        onClick={toggle}
      >
        Welcome Back
      </Button>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}></ModalHeader>
        <ModalBody>
          <Form>
            <FormGroup>
              <div> Welcome Back</div>
            </FormGroup>
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={handleConfim}>
            Close
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default ConfirmModal;
