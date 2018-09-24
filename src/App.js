import React, { Component } from 'react';
import { Route } from "react-router-dom";
import './App.css';
import Home from "./pages/home/home";


class App extends Component {
  render() {
    return (
      <div className="App">
        <Home/>
      </div>
    );
  }
}

export default App;
