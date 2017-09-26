/* eslint-disable flowtype/require-valid-file-annotation */

import React from 'react'

import { Container } from 'rebass'

import Grid from 'material-ui/Grid'

import ChallengeFilter from '../components/ChallengeFilter'
import ChallengePreview from '../components/ChallengePreview'
import PageTitle from '../components/PageTitle'

import BusinessIcon from 'material-ui-icons/Business'

const Challenges = () => (
  <div>
    <PageTitle title="Challenges">
      <BusinessIcon />
    </PageTitle>
    <ChallengeFilter />
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
