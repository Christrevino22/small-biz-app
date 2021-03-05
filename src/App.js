import "./App.css";
import React from "react";
import Router from "./Router";
import { BrowserRouter } from "react-router-dom";
import Navigation from "./Components/Navigation";
import { Provider } from "react-redux";
import store from "./redux/store";

/**
 * HERE WILLL RESIDE THE SETUP PF THE ROUTER AND PROTECTED ROUTES
 * I THINK ALL THAT IS LEFT IS TOO CONNECT REDUX STUFF HERE!!!
 *
 */

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Navigation />
        <Router />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
