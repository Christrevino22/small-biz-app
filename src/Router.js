import React from "react";
import { Switch, Route, Redirect } from "react-router";
import cookie from "cookie";
import HomeListing from "./Components/HomeListing";
import Login from "./Components/Login";

// Write checkAuth function here
const checkAuth = () => {
  const cookies = cookie.parse(document.cookie);
  return cookies["loggedIn"] ? true : false;
};

// Check the cookies for a cookie called "loggedIn"
//THIS WAS ALREADY DONE IN THE FUNCTION ABOVE SEE PROTECTED ROUTES IN THE ZOLLEGE SHIT

// Write ProtecctedRoute function here
//NEED TO USE THIS ON THE ROUTES THAT I WANT PROTECTED
const ProtectedRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        checkAuth() ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
};

const Router = () => {
  return (
    <Switch>
      <Route exact path="/" component={HomeListing} />
      <Route path="/login" component={Login} />
      <Route path="*" component={() => "404 NOT FOUND!"} />
    </Switch>
  );
};

export default Router;
