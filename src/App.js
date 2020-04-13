import React, { Component } from 'react';
import './App.css';
import firebase from "firebase"
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth"

firebase.initializeApp({
  apiKey:"AIzaSyBdKX-YN4Oako9yn7P3GvNmZpEuhSUrMxA",
  authDomain:"miniproject079.firebaseapp.com"
})

class App extends Component{
  state={isSignedIn: false}
  uiConfig = {
    signInFlow: "popup",
    signInOptions:[
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.FacebookAuthProvider.PROVIDER_ID,
    ],
    callbacks:{
      signInSuccess: () => false
    }
  }

  componentDidMount=()=>{

    firebase.auth().onAuthStateChanged(user => {
      this.setState({isSignedIn:!!user})
      console.log(!!user)
    })

  }

  render (){
    return(
    <div className="App">
      {this.state.isSignedIn ? 
      <span>
      <div>Signed In!</div>
      <button onClick={()=>firebase.auth().signOut()}>Log out</button>
      </span>
      :
      (<StyledFirebaseAuth
        uiConfig={this.uiConfig}
        firebaseAuth={firebase.auth()}
      />)
      }
    </div>
  )
    }
}

export default App;
