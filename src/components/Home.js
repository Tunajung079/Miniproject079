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
              src="https://historical-atd-th.s3.amazonaws.com/images/20180627-a0e802be4b971e20cf09a.jpg"
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