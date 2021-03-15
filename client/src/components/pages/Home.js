import React from "react";
import { Jumbotron, Container, Button } from "reactstrap";
import { Image, Row, Col } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useHistory, Link } from "react-router-dom";
import CarouselComponent from "./Carousel";
import FooterPage from "./Footer";
import './Home.css'
import cover from '../../photos/couvre.jpg'

const Home = () => {
  const history = useHistory();
  const isAuth = useSelector((state) => state.authReducer.isAuth);
  // style={{ backgroundImage: `url(${bgimage})`, backgroundSize: 'cover' }}
  return (
    <div style={{backgroundColor:'#F7F7F7'}}>
      <CarouselComponent />

      <Jumbotron style={{backgroundColor:'white'}}>
  <h2 style={{fontSize: '200%', color: 'black'}}>Discover our Communities</h2>
  <div style={{display:'flex', justifyContent:'space-between', width:'90%', height:'30%',marginLeft:'80px', marginTop:'80px', borderRadius: "30px", marginTop:'1%'}}>
<div style={{ borderRadius: "30px", width:'23%', height:'10%' }}>
  <Link to='/sports'>
<Image
            src="https://images.unsplash.com/photo-1591311630200-ffa9120a540f?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=998&q=80"
            fluid
            width="90%"
            style={{ borderRadius: "30px"}}></Image>
            </Link> 
            
         <h3>Sports</h3>
</div>
<div style={{ borderRadius: "30px", width:'25%', height:'11%' }}>
  <Link to='/outdoor'>
<Image
            src="https://images.unsplash.com/photo-1563299796-17596ed6b017?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80"
            fluid
            width="90%"
            style={{ borderRadius: "30px"}}></Image>
            </Link> 
            
         <h3>Outdoors</h3>
</div>
<div style={{ borderRadius: "30px", width:'25%', height:'10%' }}>
  <Link to='/arts'>
<Image
            src="https://images.unsplash.com/photo-1600693437693-e3eb10df2677?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1951&q=80"
            fluid
            width="90%"
            style={{ borderRadius: "30px"}}></Image>
            </Link> 
            
         <h3>Arts</h3>
</div>
<div style={{ borderRadius: "30px", width:'25%', height:'10%' }}>
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
  {/* <Container><div style={{backgroundColor:'yellow', width:'350px', height:'250px'}}></div></Container>
  <Container><div style={{backgroundColor:'black', width:'350px', height:'250px'}}></div></Container>
  <Container><div style={{backgroundColor:'red', width:'350px', height:'250px'}}></div></Container> */}

</Jumbotron>




      <Jumbotron
        style={{
          background: "white",
          marginTop:'-8%'
          // height: "300px",
          // display: "flex",
          // flexDirection: "column",
          // position: "relative",
        }}
        fluid
      >
        <Container
          fluid
          className="p-3"
          style={{
            // display: "flex",
            // flexDirection: "column",
            position: "relative",
          }}
        >
          {/* <h1 className="display-3">Welcome To Home Page</h1> */}
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
