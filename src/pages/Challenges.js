/* eslint-disable flowtype/require-valid-file-annotation */

import React from 'react'

import { Container } from 'rebass'

import Grid from 'material-ui/Grid'

import Filter from '../components/Filter'
import ChallengePreview from '../components/ChallengePreview'
import PageTitle from '../components/PageTitle'

const Challenges = () => (
  <div>
    <PageTitle>Challenges</PageTitle>
    <Filter />
    <Container is="main">
      <Grid container>
        {[0, 1, 2].map(value => (
          <Grid xs={12} sm={6} lg={4} xl={3} key={value} item>
            <ChallengePreview />
          </Grid>
        ))}
      </Grid>
    </Container>
  </div>
)

export default Challenges
