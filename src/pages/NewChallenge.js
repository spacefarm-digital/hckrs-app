/* eslint-disable flowtype/require-valid-file-annotation */

import React, { Component } from 'react'

import PageTitle from '../components/PageTitle'
import NewChallengeForm from '../components/NewChallengeForm'
import PrettyPaper from '../components/extended/PrettyPaper'

import { Box } from 'rebass'

import FluidContainer from '../components/extended/FluidContainer'

import Icon from 'material-ui/Icon'

import AddIcon from 'material-ui-icons/Add'

class NewChallenge extends Component {
  render() {
    return (
      <main>
        <FluidContainer tight>
          <Box mb={3}>
            <PageTitle title="Add new challenge">
              <AddIcon />
            </PageTitle>
          </Box>
          <PrettyPaper>
            <NewChallengeForm />
          </PrettyPaper>
        </FluidContainer>
      </main>
    )
  }
}
export default NewChallenge
