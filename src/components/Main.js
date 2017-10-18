/* eslint-disable flowtype/require-valid-file-annotation */

import React, { Component } from 'react'

// React router
import { Switch, Route } from 'react-router-dom'

// Import pages
import Home from '../pages/Home'
import Challenges from '../pages/Challenges'
import Challenge from '../pages/Challenge'
import Hackers from '../pages/Hackers'
import News from '../pages/News'
import Activity from '../pages/Activity'
import Test from '../pages/Test'
import Profile from '../pages/Profile'
import NewChallenge from '../pages/NewChallenge'
import DraftChallenge from '../pages/DraftChallenge'
// Marketing
import MHome from '../pages/MHome'
import Benefits from '../pages/Benefits'

import { Box } from 'rebass'

class Main extends Component {
  render() {
    return (
      <Box pb={4}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/challenges" component={Challenges} />
          <Route path="/challenges/" component={Challenge} />
          <Route exact path="/hackers" component={Hackers} />
          <Route exact path="/news" component={News} />
          <Route exact path="/activity" component={Activity} />
          <Route exact path="/test" component={Test} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/new-challenge" component={NewChallenge} />
          <Route exact path="/draft-challenge" component={DraftChallenge} />
          <Route exact path="/" component={DraftChallenge} />
          {/* Marketing */}
          <Route exact path="/mHome" component={MHome} />
          <Route exact path="/benefits" component={Benefits} />
        </Switch>
      </Box>
    )
  }
}
export default Main
