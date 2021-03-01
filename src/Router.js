import React from "react";
import { Switch, Route } from "react-router";
import HomeListing from "./Components/HomeListing";

const Router = () => {
  return (
    <Switch>
      <Route exact path="/" component={HomeListing} />
      {/* <Route path='/' component={HomeListing}/> */}
    </Switch>
  );
};

export default Router;
