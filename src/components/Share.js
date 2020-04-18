import React, { Component, useState, useEffect } from 'react'
import {
  Button,
  Form,
  Col,
  Nav,
  NavDropdown,
  Navbar,
  FormControl,
  Spinner,
  Icon
} from 'react-bootstrap'
import { firestore } from '../index'


const Share = ()=> {
    const [menu,setMenu] = useState([{}]);
    const [id,setId] = useSิtate(0);
    const [fname,setFname] = useState('');
    const [lname,setLname] = useState('');
    const [foodname,setFoodname] = useState('');
    const [gar,setGar] = useState('');
    const [how,setHow] = useState('');
    const [pic1,setPic1] = useState('');
    const [pic2,setPic2] = useState('');
    const [pic3,setPic3] = useState('');
    const [pic4,setPic4] = useState('');

    const addMenu = () => {

        let id = (menu.length === 0) ? 1 : menu[menu.length - 1].id + 1
        firestore.collection("share").doc(id + '').set({ id, fname, lname, foodname, gar, how, pic1,pic2,pic3,pic4 })
      alert("Finish")
    }

  return (
    <div>
      <Form.Row>
        <Col>
          <Form.Control name="fname" placeholder='First name' onChange={(e)=> setFname(e.target.value)}/>
        </Col>
        <Col>
          <Form.Control name="lname" placeholder='Last name' onChange={(e)=> setLname(e.target.value)}/>
        </Col>
        <br />
      </Form.Row>
      <Form.Group>
      <br />
      <br />
        <Form.Control name="foodname" size='lg' type='text' placeholder='ชื่ออาหาร' onChange={(e)=> setFoodname(e.target.value)} />
        <br />
        <label for="exampleFormControlTextarea1">เครื่องปรุง/วัตถุดิบ</label>
        <textarea name="gar" class="form-control" id="exampleFormControlTextarea1" rows="3" class="form-control" id="exampleFormControlTextarea1" rows="3" onChange={(e)=> setGar(e.target.value)}></textarea>
        
        <br />
        <label for="exampleFormControlTextarea1">วิธีการทำอาหาร</label>
        <textarea name="how" class="form-control" id="exampleFormControlTextarea1" rows="3" class="form-control" id="exampleFormControlTextarea1" rows="3" onChange={(e)=> setHow(e.target.value)}></textarea>
        <br />
        <Form.Control name="pic1" size='sm' type='text' placeholder='รูปภาพ 1 (URL)' onChange={(e)=> setPic1(e.target.value)}/>
        <br />
        <Form.Control name="pic2" size='sm' type='text' placeholder='รูปภาพ 2 (URL)' onChange={(e)=> setPic2(e.target.value)}/>
        <br />
        <Form.Control name="pic3" size='sm' type='text' placeholder='รูปภาพ 3 (URL)' onChange={(e)=> setPic3(e.target.value)}/>
        <br />
        <Form.Control name="pic4" size='sm' type='text' placeholder='รูปภาพ 4 (URL)' onChange={(e)=> setPic4(e.target.value)}/>
      </Form.Group>
      <br />
      <Button variant="primary" onClick={addMenu}>Submit</Button>{' '}
      <br />
    </div>
  )
}

export default Share
