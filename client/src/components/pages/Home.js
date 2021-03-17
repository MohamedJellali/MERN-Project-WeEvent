import React from "react";
import { Jumbotron, Container, Button } from "reactstrap";
import { Image, Row, Col } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useHistory, Link } from "react-router-dom";
import CarouselComponent from "./Carousel";
import FooterPage from "./Footer";
import './Home.css'
import cover from '../../photos/couvre.jpg'
import FeaturedPost from "./Posts";
import JumbotronPage from "./About";
import Presenter from './Presenter'


const Home = () => {
  const history = useHistory();
  const isAuth = useSelector((state) => state.authReducer.isAuth);
  // style={{ backgroundImage: `url(${bgimage})`, backgroundSize: 'cover' }}
  return (
    <div >
      <CarouselComponent />

      <Jumbotron style={{backgroundColor:'white'}}>
  <h2 style={{fontSize: '200%', color: 'black', marginBottom:'30px'}}>Discover our Communities</h2>
  <div className='communities'>
<div className='immg'>
  <Link to='/sports'>
<Image
            src="https://images.unsplash.com/photo-1591311630200-ffa9120a540f?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=998&q=80"
            fluid
            width="90%"
            style={{ borderRadius: "30px"}}></Image>
            </Link> 
            
         <h3>Sports</h3>
</div>
<div className='immgg'>
  <Link to='/outdoor'>
<Image
            src="https://images.unsplash.com/photo-1563299796-17596ed6b017?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80"
            fluid
            width="90%"
            style={{ borderRadius: "30px"}}></Image>
            </Link> 
            
         <h3>Outdoors</h3>
</div>
<div className='immgg'>
  <Link to='/arts'>
<Image
            src="https://images.unsplash.com/photo-1600693437693-e3eb10df2677?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1951&q=80"
            fluid
            width="90%"
            style={{ borderRadius: "30px"}}></Image>
            </Link> 
            
         <h3>Arts</h3>
</div>
<div className='immgg'>
  <Link to='/charity'>
<Image
            src="https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
            fluid
            width="90%"
            style={{ borderRadius: "30px"}}></Image>
            </Link> 
            
         <h3>Charity</h3>
</div>
    
</div>

</Jumbotron>


<Presenter />

<JumbotronPage />



      <Jumbotron
        style={{
          background: "white",
          marginLeft:'2%'
        }}
        fluid
      >
        <Container
          fluid
          className="p-3"
          style={{
            position: "relative",
          }}
        >
          <Image
            src={cover}
            fluid
            width="90%"
            style={{ borderRadius: "30px", height: "470px" }}
          />
          <div
            style={{
              position: "absolute",
              top: "10%",
              left: "6%",
              color: "white",
              fontWeight: "900",
              width: "500px",
            }}
          >
            <h2 style={{ fontSize: "70px" }}>
              Your universe deserves to be shared
            </h2>
            <h4>Click and share your universe with a worldwide community</h4>
            <Button
              style={{
                backgroundColor: "white",
                color: "black",
                fontWeight: "900",
                width: "150px",
                height: "50px",
                borderRadius: "30px",
              }}
              onClick={
                () => (isAuth ? history.push("/add") : history.push("/Loginn"))
              }
            >
              Creat Event
            </Button>
          </div>
        </Container>
      </Jumbotron>


      <FooterPage />
    </div>
  );
};
export default Home;
