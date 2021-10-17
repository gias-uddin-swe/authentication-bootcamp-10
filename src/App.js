import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "./components/Header/Header";
import Login from "./components/Login/Login";
import Contact from "./components/Contact/Contact";
import Payment from "./components/Payment/Payment";
import Home from "./components/Home/Home";
import Error from "./components/Error/Error";
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch,
} from "react-router-dom";

import About from "./components/About/About";
import AuthProvider from "./components/AuthProvider/AuthProvider";
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route exact path="/home">
              <Home></Home>
            </Route>
            <Route exact path="/about">
              <About></About>
            </Route>
            <Route exact path="/login">
              <Login></Login>
            </Route>
            <Route exact path="/contact">
              <Contact></Contact>
            </Route>
            <PrivateRoute exact path="/payment">
              <Payment></Payment>
            </PrivateRoute>
            <Route path="/*">
              <Error></Error>
            </Route>
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
