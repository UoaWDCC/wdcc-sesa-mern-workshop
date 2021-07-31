import React from "react";
import "./styling/App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import IndexPage from "./pages/IndexPage";
import AnotherPage from "./pages/AnotherPage";
import Dashboard from "./pages/Dashboard";
import firebase from "firebase";
import "firebase/firestore";
import "firebase/firestore";

import { useAuthState } from "react-firebase-hooks/auth";
import { useCollectionData } from "react-firebase-hooks/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyCkyarPJPUSpgyc70ziKabdIzlRMT7-3-Y",
  authDomain: "procrasti-champ.firebaseapp.com",
  projectId: "procrasti-champ",
  storageBucket: "procrasti-champ.appspot.com",
  messagingSenderId: "287629001288",
  appId: "1:287629001288:web:c066238e4b594bee694e7d",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();

function SignIn() {
  const signInWithFacebook = () => {
    const provider = new firebase.auth.FacebookAuthProvider();
    auth
      .signInWithPopup(provider)
      .then((result) => {
        /** @type {firebase.auth.OAuthCredential} */
        var credential = result.credential;

        // The signed-in user info.
        var user = result.user;
        console.log(user, accessToken);

        // This gives you a Facebook Access Token. You can use it to access the Facebook API.
        var accessToken = credential.accessToken;

        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        console.log(errorCode);
        // ...
      });
  };
  return <button onClick={signInWithFacebook}>Sign in with Facebook</button>;
}

function SignOut() {
  return (
    auth.currentUser && <button onClick={() => auth.signOut()}>Sign out</button>
  );
}

function App() {
  const [user] = useAuthState(auth);
  console.log(user);

  return (
    <div className="App">
      {user ? <Dashboard user={user} SignOut={SignOut()} /> : <SignIn />}
      {/* <div>
        <SignIn />
      </div>
      <BrowserRouter>
        <Switch>
          <Route exact path={"/"} component={IndexPage} />
          <Route exact path={"/another"} component={AnotherPage} />

          {/* Default path if nothing else matches */}
      {/* <Route path={"/"} component={IndexPage} />
        </Switch>
      </BrowserRouter> */}{" "}
    </div>
  );
}

export default App;
