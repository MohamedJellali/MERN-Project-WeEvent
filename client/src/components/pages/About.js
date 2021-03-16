import React from "react";
import {
  MDBJumbotron,
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
  MDBCardBody,
  MDBCardText,
  MDBCardTitle,
} from "mdbreact";

import brand from "../../photos/logo.png";

const JumbotronPage = () => {
  return (
    <MDBContainer>
      <MDBRow>
        <MDBCol>
          <MDBJumbotron style={{ backgroundColor:'#484848', color:'white' }}>
            <MDBCardBody>
              <MDBCardTitle className="h2">About Us</MDBCardTitle>
              <MDBCardText>
                WeEvent.com was born in 2007 when two Hosts welcomed three
                guests to their San Francisco home, and has since grown to 4
                million Hosts who have welcomed over 800 million guest arrivals
                in almost every country across the globe. Every day, Hosts offer
                one-of-a-kind stays and unique Experiences that make it possible
                for guests to experience the world in a more authentic,
                connected way.
              </MDBCardText>
              <div style={{display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center'}}>
              <p className="blue-text my-4 font-weight-bold">
                Mr. Mohamed JELLALI - WeEvent.com Founder
              </p>
              <img
                width="140px"
                height="auto"
                className="img-responsive"
                src={brand}
                alt="logo"
              />
              </div>
            </MDBCardBody>
          </MDBJumbotron>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default JumbotronPage;
