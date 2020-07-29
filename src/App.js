import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import { Home } from "./Home";
import { Contact } from "./Contact";
import { NoMatch } from "./NoMatch";
import { Layout } from "./components/Layout";
import { NavigationBar } from "./components/NavigationBar";
import { Jumbotron } from "./components/Jumbotron.js";
import { Guitars } from "./Guitars";
class App extends Component {
  render() {
    return (
      <div className="App">
        <React.Fragment className="App">
          <Router>
            <NavigationBar />
            <Jumbotron></Jumbotron>
            <Layout>
              <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/contact" component={Contact} />
                <Route path="/guitars" component={Guitars} />
                <Route path="*" component={NoMatch} />
              </Switch>
            </Layout>
          </Router>
        </React.Fragment>
      </div>
    );
  }
}

export default App;
