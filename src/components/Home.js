import React from "react";
import { MDBJumbotron, MDBBtn, MDBContainer, MDBRow, MDBCol,  MDBCardImage, MDBCardBody, MDBCardTitle, MDBCardText } from "mdbreact";

const Home = () => {
  return (
    <MDBContainer className="mt-5 text-center">
      <MDBRow>
        <MDBCol>
          <MDBJumbotron className="p-0">
            <MDBCardImage
              className="img-fluid"
              src="https://www.twinpalmshotelsresorts.com/wp-content/uploads/2019/09/4024-1024x683.jpg"
            />
            <MDBCardBody>
              <MDBCardTitle className="h3">Share Food</MDBCardTitle>
              <MDBCardText>
                Some quick example text to build on the card title and make up
                the bulk of the card&apos;s content.
              </MDBCardText>
              <MDBBtn href="#" gradient="purple" rounded>
                มาแบ่งบันสูตรอาหารของคุณสิ!
              </MDBBtn>
            </MDBCardBody>
          </MDBJumbotron>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  )
}

export default Home;