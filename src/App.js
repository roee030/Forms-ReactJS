import React, { Component } from "react";
import "./App.css";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import Home from "./Components/Home";
import Header from "./Components/Header";
import CreateSurvey from "./Components/CreateSurvey";
import Survey from "./Components/Survey";
export default class App extends Component {
  state = {
    ArrayOfQuestionsAndAnswers: [],
  };

  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Header />
          <Route path="/" exact component={Home}></Route>
          <Route path="/createsurvey" exact component={CreateSurvey}></Route>
          <Route path="/survey/:id" component={Survey}></Route>
        </BrowserRouter>
      </div>
    );
  }
}
