import React, { Component } from "react";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import Home from "./Components/Home";
import Header from "./Components/Header";
import CreateSurvey from "./Components/CreateSurvey";
import Survey from "./Components/Survey";
export default class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <div>
            <Header />
            <Route path="/" exact component={Home}></Route>
            <Route path="/createsurvey" exact component={CreateSurvey}></Route>
            <Route path="/survey/:id" component={Survey}></Route>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}
