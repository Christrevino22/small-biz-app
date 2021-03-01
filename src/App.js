import "./App.css";
import React from "react";
import Router from './Router'
import { BrowserRouter } from "react-router-dom";
import Navigation from './Components/Navigation'

/**
 * HERE WILLL RESIDE THE SETUP PF THE ROUTER AND PROTECTED ROUTES
 * I THINK ALL THAT IS LEFT IS TOO CONNECT REDUX STUFF HERE!!!
 * 
 */

function App() {

  return (
    
      <BrowserRouter>
      <Navigation/>
        <Router/>
      </BrowserRouter>
  
  );
}

export default App;

