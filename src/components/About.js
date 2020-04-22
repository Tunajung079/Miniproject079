import React, { Component, useState, useEffect } from 'react'
import {
  MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBRow, MDBCol, MDBIcon 
} from 'mdbreact'

const About = () => {
  return (
    <MDBRow>
      <MDBCol style={{ maxWidth: "30rem" }}>
        <MDBCard reverse>
          <MDBCardImage cascade style={{ height: '20rem' }} src="https://scontent.fbkk5-4.fna.fbcdn.net/v/t31.0-8/20729045_1398073870305843_9094984565057226094_o.jpg?_nc_cat=110&_nc_sid=05277f&_nc_eui2=AeGBnwR855arzkhQ0_89_S_Cx5IJ9jORjGzHkgn2M5GMbJUhuW-2NBezCKLeNGGk3DvNGGPiemZ7lHSyfF87xBxI&_nc_oc=AQmra5PDU9oFmXEx5Haxep-OS1Yy68v1wB1rKzIx7vLvSUlfUoYlZERoXQ0VrWFSOlc&_nc_ht=scontent.fbkk5-4.fna&oh=a71964d95af1595768f8d34122478de1&oe=5EC5F3AE" />
          <MDBCardBody cascade className="text-center">
            <MDBCardTitle>About Us</MDBCardTitle>
            <h5 className="indigo-text"><strong>Nichakan Jaisaksern (6035512079)</strong></h5>
            <MDBCardText>Student of prince of songkla University Phuket Cammpus.</MDBCardText>
            <a href="#!" className="icons-sm li-ic ml-1">
              <MDBIcon fab icon="linkedin-in" /></a>
            <a href="#!" className="icons-sm tw-ic ml-1">
              <MDBIcon fab icon="twitter" /></a>
            <a href="#!" className="icons-sm fb-ic ml-1">
              <MDBIcon fab icon="facebook-f" /></a>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
    </MDBRow>
    
  )
}

export default About;