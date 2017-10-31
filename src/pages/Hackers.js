import React, { Component } from 'react'

import Grid from 'material-ui/Grid'

import HackerFilter from '../components/HackerFilter'
import ProfilePreview from '../components/ProfilePreview'
import FluidContainer from '../components/extended/FluidContainer'
import FancyHackersPreview from '../components/FancyHackersPreview'

import PageTitle from '../components/PageTitle'

import PeopleIcon from 'material-ui-icons/People'

class Hackers extends Component {
  render() {
    return (
      <div>
        <FluidContainer>
          <PageTitle title="Hackers">
            <PeopleIcon />
          </PageTitle>
        </FluidContainer>
        <FancyHackersPreview />
        <HackerFilter />
        <FluidContainer is="main">
          <Grid container>
            {[0, 1, 2].map(value => (
              <Grid xs={12} sm={6} md={4} lg={3} xl={2} key={value} item>
                <ProfilePreview />
              </Grid>
            ))}
          </Grid>
        </FluidContainer>
      </div>
    )
  }
}
export default Hackers
