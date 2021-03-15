import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import brand from "../../photos/logo.png";

const FooterPage = () => {
  return (
    <MDBFooter color="blue" className="font-small pt-4 mt-4" style={{background:'#020403'}}>
      <MDBContainer fluid className="text-center text-md-left" >
        <MDBRow>
          <MDBCol md="6">
            {/* <h5 className="title">WeEvent.com</h5> */}
            <img
                width="20%"
                height="auto"
                className="img-responsive"
                src={brand}
                alt="logo"
              />
            <p style={{color:'white'}}>
            WeEvent.com is a participant in the Amazon Services LLC Associates Program,
an affiliate advertising program designed to provide a means for sites to earn advertising
fees by advertising and linking.
            </p>
          </MDBCol>
          <MDBCol md="6">
            {/* <ul>
              <li className="list-unstyled">
                <a href="#!">Help</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Assistance</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">About As</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Contact Us</a>
              </li>
            </ul> */}
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid style={{color:'white'}}>
          &copy; {new Date().getFullYear()} WeEvent, Inc. All rights reserved 
          {/* <a href="https://localhost/3000"> WeEvent.com </a> */}
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}

export default FooterPage;