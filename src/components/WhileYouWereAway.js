import React, { Component } from 'react'

import Grid from 'material-ui/Grid'

import { Heading, Box } from 'rebass'

import ChallengeUpdate from './ChallengeUpdate'

class WhileYouWereAway extends React.Component {
  render() {
    return (
      <Box mb={4} pt={4}>
        <Heading f={3} is="h2" mb={3}>
          While you were away
        </Heading>
        <Grid container>
          <Grid item xs={12} sm={6} md={4} xl={3}>
            <ChallengeUpdate
              name="Sparta Hackathon"
              avatar="http://www.spartahost.com/wp-content/themes/spartahost/images/sparta.png"
              status="Upcoming"
              updates={[
                'A new prize was added',
                'The time and date were modified',
                'Another thing happened',
              ]}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4} xl={3}>
            <ChallengeUpdate
              name="Sparta Hackathon"
              avatar="http://www.spartahost.com/wp-content/themes/spartahost/images/sparta.png"
              status="Upcoming"
            />
          </Grid>
        </Grid>
      </Box>
    )
  }
}

export default WhileYouWereAway
