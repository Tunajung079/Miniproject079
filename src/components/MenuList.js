import React, { Component, useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Button, ListGroup, Carousel } from 'react-bootstrap'
import {
  MDBRow,
  MDBCol,
  MDBIcon,
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBView,
  MDBMask,
  MDBModal,
  MDBModalHeader,
  MDBModalFooter,
  MDBModalBody,
  MDBCardImage,
  MDBCardTitle,
  MDBCardText
} from 'mdbreact'
import Modal from 'react-bootstrap/Modal'
//แสดงรายการอาหาร

export default props => {
  const { menu } = props
  const { fname, lname, foodname, gar, how, pic1, pic2, pic3, pic4 } = menu

  const [open, setOpen] = useState(false)

  const showMenu = () => {
    setOpen(true)
  }
  const hideModal = () => {
    setOpen(false)
  }

  const [show, setShow] = useState(false)

  const menuClose = () => setShow(false)
  const menuShow = () => setShow(true)

  return (
    <div>
      <MDBCol style={{ maxWidth: '22rem' }}>
        <MDBCard>
          <MDBCardImage className='img-fluid' src={pic1} waves />
          <MDBCardBody>
            <MDBCardTitle>{foodname}</MDBCardTitle>
            <MDBCardText>
              By {fname} {lname}
            </MDBCardText>
            <MDBBtn onClick={menuShow}>Click</MDBBtn>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>


      <Modal show={show} onHide={menuClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>
              {foodname}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <MDBView className='rounded z-depth-2 mb-lg-0 mb-4 ' hover waves>
            <MDBMask overlay='white-slight' />
          </MDBView>
          <ListGroup className='d-flex justify-con  tent-center mg-1'>
            <ListGroup.Item>เครื่องปรุง/วัตถุดิบ : {gar}</ListGroup.Item>
            <ListGroup.Item>วิธีการทำ: {how}</ListGroup.Item>
          </ListGroup>
        </Modal.Body>
        <Modal.Footer>
          <MDBView className='rounded z-depth-2 mb-lg-0 mb-4' hover waves>
            <Carousel>
              <Carousel.Item>
                <img
                  className='d-block w-100'
                  src={pic1}   
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className='d-block w-100'
                  src={pic2}                
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className='d-block w-100'
                  src={pic3}
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className='d-block w-100'
                  src={pic4}
                />
              </Carousel.Item>
            </Carousel>
            <MDBMask overlay='white-slight' />
          </MDBView>
          <Button variant='primary' onClick={menuClose}>
            close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}
