import React, { Component } from 'react'

import Grid from 'material-ui/Grid'

import ChallengeUpdate from './ChallengeUpdate'

class WhileYouWereAway extends React.Component {
  render() {
    return (
      <Grid container>
        <Grid item xs={12} sm={6} md={4}>
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
        <Grid item xs={12} sm={6} md={4}>
          <ChallengeUpdate
            name="Sparta Hackathon"
            avatar="http://www.spartahost.com/wp-content/themes/spartahost/images/sparta.png"
            status="Upcoming"
          />
        </Grid>
      </Grid>
    )
  }
}

export default WhileYouWereAway
