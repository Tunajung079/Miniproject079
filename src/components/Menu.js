import React, { Component, useState, useEffect } from 'react'
import './Menu.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Form, Nav, NavDropdown, Navbar, FormControl, Spinner, Icon } from 'react-bootstrap';
import logo1 from './logo1.png'

const Menu =()=>{
    return(
        <div>
         <Navbar bg="light" variant="light">
            <Navbar.Brand href="#home">
             <img
                            src={logo1} 
                            width="250"
                            height="230"
                            className="d-inline-block align-top"
                           
                        />
    </Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="/Home">Home</Nav.Link>
      <Nav.Link href="/Cuisine">Cuisine</Nav.Link>
      <Nav.Link href="/Share">Share your Food</Nav.Link>
      <Nav.Link href="#/About">About Us</Nav.Link>
    </Nav>
    <Nav>
      <Nav.Link href="#deets">Log out</Nav.Link>
    </Nav>
    
  </Navbar>
        </div>
    )
}


export default Menu;