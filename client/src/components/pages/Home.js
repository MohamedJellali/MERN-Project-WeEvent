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
