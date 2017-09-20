/* eslint-disable flowtype/require-valid-file-annotation */

import React, { Component } from 'react'

// React router
import { Switch, Route } from 'react-router-dom'

// Import pages
import Home from '../pages/Home'
import Challenges from '../pages/Challenges'
import Hackers from '../pages/Hackers'
import News from '../pages/News'
import Activity from '../pages/Activity'
import Test from '../pages/Test'
import Profile from '../pages/Profile'

import { Container, Box } from 'rebass'

class Main extends Component {
  render() {
    return (
      <Box pb="100px">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/challenges" component={Challenges} />
          <Route path="/hackers" component={Hackers} />
          <Route path="/news" component={News} />
          <Route path="/activity" component={Activity} />
          <Route path="/test" component={Test} />
          <Route path="/profile" component={Profile} />
        </Switch>
      </Box>
    )
  }
}
export default Main
