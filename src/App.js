import React, { Component } from 'react';
import { Route } from "react-router-dom";
import './App.css';
import Home from "./pages/home/home";
import SignIn from "./components/signin/signin";
import SignUp from "./components/signup/signup";


class App extends Component {
  render() {
    return (
      <div className="App">
        <Route exact path="/" component={Home}/>
        <Route exact path="/signin" component={SignIn}/>
        <Route exact path="/signup" component={SignUp}/>
      </div>
    );
  }
}

export default App;
