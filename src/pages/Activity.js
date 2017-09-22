/* eslint-disable flowtype/require-valid-file-annotation */

import React, { Component } from 'react'

import { Container, Box } from 'rebass'

import PageTitle from '../components/PageTitle'

import NotificationsIcon from 'material-ui-icons/Notifications'

class Activity extends Component {
  render() {
    return (
      <div>
        <PageTitle title="Activity">
          <NotificationsIcon />
        </PageTitle>
        <Container pt={4} is="main" />
      </div>
    )
  }
}
export default Activity
