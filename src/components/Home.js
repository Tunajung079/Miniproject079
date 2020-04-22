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
                แหล่งรวมสูตรอาหารต่างๆ คุณสามารถทำอาหารได้อย่างไม่น่าเบื่อ และมาร่วมแชร์อาหารของคุณกัน.
              </MDBCardText>
              <MDBBtn color="amber" href="/Share">มาแบ่งบันสูตรอาหารของคุณสิ!</MDBBtn>
            </MDBCardBody>
          </MDBJumbotron>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  )
}

export default Home;