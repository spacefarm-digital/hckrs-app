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
import ConfigureTimeSlots from '../pages/ConfigureTimeSlots'
import BookTimeSlot from '../pages/BookTimeSlot'
import SignUp from '../pages/SignUp'
import LogIn from '../pages/LogIn'
import NotFound from '../pages/NotFound'

// Marketing
import MHome from '../pages/MHome'
import Benefits from '../pages/Benefits'

import { Box } from 'rebass'

class Main extends Component {
  render() {
    return (
      <Box pb={4}>
        <Switch>
          <Route exact path="/" component={MHome} />
          <Route exact path="/dashboard" component={Home} />
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
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/log-in" component={LogIn} />
          {/* Marketing */}
          <Route path="/benefits" component={Benefits} />
          <Route path="/configure-time-slots" component={ConfigureTimeSlots} />
          <Route path="/book-time-slot" component={BookTimeSlot} />
          {/* 404 */}
          <Route component={NotFound} />
        </Switch>
      </Box>
    )
  }
}
export default Main
