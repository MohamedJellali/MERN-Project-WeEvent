import React from "react";
import { Jumbotron, Container, Button } from "reactstrap";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import CarouselComponent from "./Carousel";


const Home = () => {
  const history = useHistory();
  const isAuth = useSelector((state) => state.authReducer.isAuth);
  // style={{ backgroundImage: `url(${bgimage})`, backgroundSize: 'cover' }}
  return (
    <div>

      <CarouselComponent />
      <Jumbotron
        style={{
          background: !isAuth ? "#FFFFFF" : "#FFCF20",
          // backgroundImage: `url(https://images.unsplash.com/photo-1515228146022-7d8e52f8bba3?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1153&q=80)`, backgroundSize: 'cover',
        }}
        fluid
      >
        <Container fluid className="p-3">
          {!isAuth ? (
            <h1 className="display-3">Welcome To My Web Site</h1>
          ) : (
            <h1 className="display-3">Welcome To Home Page</h1>
          )}
          <p className="lead">This is a web site designed for you</p>
          <a href="" target="_blank">
            test link
          </a>
        </Container>
      </Jumbotron>
      <Button onClick={() => history.push("/sports")}>Sports</Button>
      <Button onClick={() => history.push("/outdoor")}>Outdoors</Button>
      <Button onClick={() => history.push("/arts")}>Arts</Button>
    </div>
  );
};
export default Home;
