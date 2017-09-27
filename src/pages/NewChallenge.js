/* eslint-disable flowtype/require-valid-file-annotation */

import React, { Component } from 'react'

import PageTitle from '../components/PageTitle'
import NewChallengeNav from '../components/NewChallengeNav'
import PrettyPaper from '../components/extended/PrettyPaper'

import { Container, Box } from 'rebass'

import Icon from 'material-ui/Icon'

import AddIcon from 'material-ui-icons/Add'

class NewChallenge extends Component {
  render() {
    return (
      <div>
        <Box mb={3}>
          <PageTitle title="New challenge">
            <AddIcon />
          </PageTitle>
        </Box>
        <Container>
          <PrettyPaper>
            <NewChallengeNav />
          </PrettyPaper>
        </Container>
      </div>
    )
  }
}
export default NewChallenge
