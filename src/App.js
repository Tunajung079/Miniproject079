import React, { Component,useState,useEffect } from 'react';
import './App.css';
import firebase from "firebase"
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth"
import Menu from './components/Menu';
import Log from './components/Log';
import Footer from './components/Footer';
import Home from './components/Home';
import { Switch, Route, Router } from 'react-router-dom';
import Cuisine from './components/Cuisine';
import Share from './components/Share';

firebase.initializeApp({
  apiKey: "AIzaSyBdKX-YN4Oako9yn7P3GvNmZpEuhSUrMxA",
  authDomain: "miniproject079.firebaseapp.com",
  databaseURL: "https://miniproject079.firebaseio.com",
  projectId: "miniproject079",
  storageBucket: "miniproject079.appspot.com",
  messagingSenderId: "738165764559",
  appId: "1:738165764559:web:05620bfd1854aee5f122ba",
  measurementId: "G-5V3RBCEYDL" 
})

const  uiConfig = {
  signInFlow: "popup",
  signInOptions:[
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    firebase.auth.FacebookAuthProvider.PROVIDER_ID,
  ],
  callbacks:{
    signInSuccess: () => false
  }
}

const App =()=>{
  const [isSignedIn,setisSignedIn] =useState(false);
 
  useEffect(()=>{
    firebase.auth().onAuthStateChanged(user => {
      setisSignedIn(!!user)
      console.log(!!user)
    })
  })
//isSignedIn == true แสดงว่ามีการ login แสดงว่ามึงต้อง return อะไรออกไป ?  Ans  มึงดูไหมเนี่ยถ้าไม่ดูที่กูบอกกูไปละ กูเข้าใจ แต่ที่วางผิดมันคืออันไหน

  if(isSignedIn){
    return(
      <div>
         <Menu/>
         <Switch>
           <Route exact path="/" component={Home}/>
           <Route exact path="/home" component={Home}/>
           <Route exact path="/cuisine" component={Cuisine}/>
           <Route exact path="/share" component={Share}/>
         </Switch>
      </div>
    );

  }
  else{
    return(
      <div>
        <Log/>
        <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()}/> 
      </div>
    );
  }
    
}

export default App;
