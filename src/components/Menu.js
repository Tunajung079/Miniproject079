import React from 'react'

import firebase from "firebase"
import 'bootstrap/dist/css/bootstrap.min.css';
import {Nav, Navbar} from 'react-bootstrap';
import logo3 from './logo3.png';


const Menu =()=>{


    return(
        <div>
         <Navbar bg="light" variant="light">
            <Navbar.Brand href="#home">
             <img
                            src={logo3} 
                            width="150"
                            height="115"
                            className="d-inline-block align-top"
                           
                        />
    </Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="/Home">Home</Nav.Link>
      <Nav.Link href="/Cuisine">Cuisine</Nav.Link>
      <Nav.Link href="/Share">Share your Food</Nav.Link>
      <Nav.Link href="/About">About Us</Nav.Link>
    </Nav>
    <Nav>
      <Nav.Link href="#deets" onClick={()=>firebase.auth().signOut()}>Log out</Nav.Link>
    </Nav>
  </Navbar>
        </div>
    )
}


export default Menu;