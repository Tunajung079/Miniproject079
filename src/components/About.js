import React, { Component, useState, useEffect } from 'react'
import {
  MDBJumbotron, MDBBtn, MDBContainer, MDBRow, MDBCol,  MDBCardImage, MDBCardBody, MDBCardTitle, MDBCardText
} from 'mdbreact'

const About = () => {
  return (
    <MDBContainer className="mt-5 text-center">
      <MDBRow>
        <MDBCol>
          <MDBJumbotron className="p-0">
            <MDBCardImage
              className="img-fluid"
              src="https://scontent.fbkk5-4.fna.fbcdn.net/v/t31.0-8/20729045_1398073870305843_9094984565057226094_o.jpg?_nc_cat=110&_nc_sid=05277f&_nc_eui2=AeGBnwR855arzkhQ0_89_S_Cx5IJ9jORjGzHkgn2M5GMbJUhuW-2NBezCKLeNGGk3DvNGGPiemZ7lHSyfF87xBxI&_nc_oc=AQmra5PDU9oFmXEx5Haxep-OS1Yy68v1wB1rKzIx7vLvSUlfUoYlZERoXQ0VrWFSOlc&_nc_ht=scontent.fbkk5-4.fna&oh=a71964d95af1595768f8d34122478de1&oe=5EC5F3AE"
            />
            <MDBCardBody>
              <MDBCardTitle className="h3">About Us</MDBCardTitle>
              <MDBCardText>
              My name is Nichakan Jaisaksern (6035512079). Student of prince of songkla University Phuket Cammpus.
              </MDBCardText>
              <MDBBtn href="#" gradient="purple" rounded>
                
              </MDBBtn>
            </MDBCardBody>
          </MDBJumbotron>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
    
  )
}

export default About;