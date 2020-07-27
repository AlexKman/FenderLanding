import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import { Home } from "./Home";
import { Contact } from "./Contact";
import { NoMatch } from "./NoMatch";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Router>
          <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route exact path="/contact" component={Contact}></Route>
            <Route path="*" component={NoMatch}></Route>
          </Switch>
        </Router>
      </React.Fragment>
    );
  }
}

export default App;
