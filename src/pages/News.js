/* eslint-disable flowtype/require-valid-file-annotation */

import React, { Component } from 'react'

import { Container, Box } from 'rebass'

import PageTitle from '../components/PageTitle'

import FiberNewIcon from 'material-ui-icons/FiberNew'

class News extends Component {
  render() {
    return (
      <div>
        <PageTitle title="News">
          <FiberNewIcon />
        </PageTitle>
        <Container pt={4} is="main" />
      </div>
    )
  }
}
export default News
