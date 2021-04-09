import React, { useState } from "react";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import Home from "./components/pages/Home";
import Navbar from "./components/layout/Navbar";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  withRouter
} from "react-router-dom";
import NotFound from "./components/pages/NotFound";
import AddUser from "./components/users/AddUser";
import EditUser from "./components/users/EditUser";
import Registration from "./components/auth/registration";
import Login from "./components/auth/login";
import useToken from "./components/auth/useToken"
// function setToken(userToken) {
//   sessionStorage.setItem('token', JSON.stringify(userToken));
// }

// function getToken() {
//   const tokenString = sessionStorage.getItem('token');
//   // console.log(tokenString+"thisone");
//   if(tokenString!=null)
//   return tokenString;
// }

function App() {
  // const token=getToken();
  const { token, setToken } = useToken();
  if (token == null && window.location.pathname!="/users/register")
    return <Login setToken={setToken} />
    if (token == null && window.location.pathname=="/users/register")
    return <Registration setToken={setToken} />
  const isLoggedIn = sessionStorage.getItem('isLoggedIn');
  console.log(isLoggedIn);
  return (
    <Router>
      <div className="App">
        <Navbar isLoggedIn={isLoggedIn} />

        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/users/add" component={AddUser} />
          <Route exact path="/users/register" component={Registration} />
          <Route exact path="/users/login" component={Login} />
          <Route exact path="/users/edit/:id" component={EditUser} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
