import React from "react";
import "./styling/App.css";
import {
  BrowserRouter,
  Switch,
  Route,
  Redirect,
  useHistory,
} from "react-router-dom";
import IndexPage from "./pages/IndexPage";
import AnotherPage from "./pages/AnotherPage";
import Dashboard from "./pages/Dashboard";
import SignIn from "./pages/SignIn";
import firebase from "firebase";
import "firebase/firestore";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";

import { useAuthState } from "react-firebase-hooks/auth";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { Typography } from "@material-ui/core";

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

function App() {
  const [user, loading, error] = useAuthState(auth);
  const history = useHistory();
  console.log(user);

  const theme = createMuiTheme({
    typography: {
      button: {
        textTransform: "none",
        fontWeight: 500,
      },
    },
    palette: {
      primary: {
        main: "#9aecb5",
      },
      type: "dark",
    },
  });

  if (loading) {
    return (
      <div className="App">
        <Typography>Loading... please wait</Typography>
      </div>
    );
  }

  function PrivateRoute({ children, ...rest }) {
    return (
      <Route
        {...rest}
        render={({ location }) =>
          user ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: location },
              }}
            />
          )
        }
      />
    );
  }

  return (
    <div className="App">
      {/* <ThemeProvider theme={theme}>
        {user ? <Dashboard user={user} /> : <SignIn />}
      </ThemeProvider> */}
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Switch>
            <Route exact path={"/login"}>
              <SignIn />
            </Route>
            {/* <Route exact path={"/another"} component={AnotherPage} /> */}
            <PrivateRoute exact path={"/startGame"}>
              <Dashboard user={user} page="startGame" />
            </PrivateRoute>
            <PrivateRoute path={"/"}>
              <Dashboard user={user} page="board" />
            </PrivateRoute>
          </Switch>
        </BrowserRouter>
      </ThemeProvider>
    </div>
  );
}

export default App;
