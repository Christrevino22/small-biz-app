import React from "react";
import { Switch, Route } from "react-router";
import HomeListing from "./Components/HomeListing";
import Login from './Components/Login'

const Router = () => {
  return (
    <Switch>
      <Route exact path="/" component={HomeListing} />
      <Route path='/login' component={Login}/>
    </Switch>
  );
};

export default Router;
