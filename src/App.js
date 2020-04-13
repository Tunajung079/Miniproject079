import React, { Component,useState,useEffect } from 'react';
import './App.css';
import firebase from "firebase"
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth"

firebase.initializeApp({
  apiKey:"AIzaSyBdKX-YN4Oako9yn7P3GvNmZpEuhSUrMxA",
  authDomain:"miniproject079.firebaseapp.com"
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

 

  
    return(
    <div className="App">
      {isSignedIn ? 
      <span>
      <div>Signed In!</div>
      <button onClick={()=>firebase.auth().signOut()}>Log out</button>
      </span>
      :
      (
      <StyledFirebaseAuth
        uiConfig={uiConfig}
        firebaseAuth={firebase.auth()}
        
      />)
      }
    </div>
  )
    
}

export default App;
