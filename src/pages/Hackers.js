/* eslint-disable flowtype/require-valid-file-annotation */

import React, { Component } from 'react'

import { Container, Box, Heading } from 'rebass'

import Grid from 'material-ui/Grid'

import HackerFilter from '../components/HackerFilter'
import ProfilePreview from '../components/ProfilePreview'

import PageTitle from '../components/PageTitle'

import GroupIcon from 'material-ui-icons/Group'

class Hackers extends Component {
  render() {
    return (
      <div>
        <PageTitle title="Hackers">
          <GroupIcon />
        </PageTitle>
        <HackerFilter />
        <Container is="main">
          <Grid container>
            {[0, 1, 2].map(value => (
              <Grid xs={12} sm={6} md={4} xl={3} key={value} item>
                <ProfilePreview
                  name="Hacker McHacker"
                  numberOfHacks={5}
                  location="🇳🇪 Niger"
                />
              </Grid>
            ))}
          </Grid>
        </Container>
      </div>
    )
  }
}
export default Hackers
