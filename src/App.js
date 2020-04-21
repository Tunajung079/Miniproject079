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
import About from './components/About'
import config from './components/config'
import food from './components/food.jpg'


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


  if(isSignedIn){
    return(
      <div>
         <Menu/>
         <Switch>
           <Route exact path="/" component={Home}/>
           <Route exact path="/home" component={Home}/>
           <Route exact path="/cuisine" component={Cuisine}/>
           <Route exact path="/share" component={Share}/>
           <Route exact path="/about" component={About}/>
         </Switch>
         <Footer/>
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
