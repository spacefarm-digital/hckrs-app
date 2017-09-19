/* eslint-disable flowtype/require-valid-file-annotation */

import React, { Component } from "react";

// React router
import { Switch, Route } from "react-router-dom";

// Import pages
import Home from "../pages/Home";
import Challenges from "../pages/Challenges";
import Hackers from "../pages/Hackers";
import News from "../pages/News";
import Activity from "../pages/Activity";
import Test from "../pages/Test";

import { Container, Box } from "rebass";

class Main extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/challenges" component={Challenges} />
        <Route path="/hackers" component={Hackers} />
        <Route path="/news" component={News} />
        <Route path="/activity" component={Activity} />
        <Route path="/test" component={Test} />
      </Switch>
    );
  }
}
export default Main;
