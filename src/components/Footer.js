import React, { Component, useState, useEffect } from 'react'
import { MDBCol, MDBContainer, MDBRow, MDBFooter,  MDBIcon, MDBBtn  } from "mdbreact";

const FooterPage = () => {
  return (
    <MDBFooter color="blue" className="font-small pt-4 mt-4">
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>
          <MDBCol md="4">
            <img src="https://www.phuket.psu.ac.th/wp-content/uploads/2019/03/cropped-PSU_PHUKET-EN.png"  style={{ width:450, height: 150}}/>
          </MDBCol>
          <MDBCol md="3">
            <h5 className="title">Others</h5>
            <ul>
              <li className="list-unstyled">
                <a href="https://www.wongnai.com/">wongnai</a>
              </li>
              <li className="list-unstyled">
                <a href="https://www.mcdang.com/">เชฟหมึกแดง</a>
              </li>
              <li className="list-unstyled">
                <a href="https://www.youtube.com/channel/UCmwOtmw74RVd54e5xJhVpdg/videos">ครัวชั้นสูง By เชฟป้อม</a>
              </li>
              <li className="list-unstyled">
                <a href="https://www.youtube.com/channel/UCKlG5q-H34c3Zkgye9BvjFA">รายการทีวีเกี่ยวกับการทำอาหาร</a>
              </li>
            </ul>
          </MDBCol>
          <MDBCol md="2">
            <h5 className="title">Contact Us</h5>
            <ul>
              <li className="list-unstyled">
                <a href="https://www.facebook.com/Na.Nichakan">Facebook</a>
              </li>
              <li className="list-unstyled">
                <a href="https://www.instagram.com/tuxxna/">Instagram</a>
              </li>
              <li className="list-unstyled">
                <a href="https://github.com/Tunajung079">Github</a>
              </li>
              <li className="list-unstyled">
                <a href="https://medium.com/@nichakan.tanang999">Medium</a>
              </li>
            </ul>
          </MDBCol>
          <MDBCol md="1">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS_PYMGtKSgtSq8eDiCK5ZX1kVFgWPv5nMk8hpIFH8QKbsdfvZt&usqp=CAU"  style={{ width:150, height: 150}}/>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright: <a href="https://www.mdbootstrap.com"> MDBootstrap.com </a>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}

export default FooterPage;