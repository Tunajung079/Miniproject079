import React, { Component, useState, useEffect } from 'react'
import './Menu.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Form, Nav, NavDropdown, Navbar, FormControl, Spinner, Icon } from 'react-bootstrap';

const Menu =()=>{
    return(
        <div>
         <Navbar bg="light" variant="light">
            <Navbar.Brand href="#home">
             <img
                            src="/static/media/logo2.png" 
                            width="100"
                            height="80"
                            className="d-inline-block align-top"
                           
                        />
    </Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#features">Cuisine</Nav.Link>
      <Nav.Link href="#pricing">Share your Food</Nav.Link>
      <Nav.Link href="#pricing">About Us</Nav.Link>
    </Nav>
    <Nav>
      <Nav.Link href="#deets">Log out</Nav.Link>
    </Nav>
    
  </Navbar>
        </div>
    )
}


export default Menu;