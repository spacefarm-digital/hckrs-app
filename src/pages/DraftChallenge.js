import React, { Component } from 'react'

import { Box, Sticky } from 'rebass'

import Grid from 'material-ui/Grid'

import DraftChallengeStats from '../components/DraftChallengeStats'
import AddDescription from '../components/AddDescription'
import AddSubchallenges from '../components/AddSubchallenges'
import AddAgenda from '../components/AddAgenda'
import AddAdvisors from '../components/AddAdvisors'
import AddPrizes from '../components/AddPrizes'
import AddSponsors from '../components/AddSponsors'

import FluidContainer from '../components/extended/FluidContainer'

// Fake data
import agendaData from '../data/agendaData'

class DraftChallenge extends Component {
  render() {
    return (
      <FluidContainer pt={3} is="main">
        <Box mb={3} pt={3}>
          <Grid container spacing={24}>
            {/* Brief */}
            <Grid item xs={12} md={4} lg={4} xl={3}>
              <Sticky top>
                <DraftChallengeStats
                  name="Hack MTY"
                  bio="Bio text. This will be a little bit longer, closer to a Twitter bio"
                  categories={['Media', 'Transport', 'Chemical']}
                  logo="https://s3.amazonaws.com/assets.mlh.io/events/logos/000/000/392/thumb/e722cf7c0b4d-hackmtyMLH_100x100.png?1467906270"
                  brief="This is the largest student hackathon in Mexico. Hosted by Tec de Monterrey, ranked 5 stars by QS, in the top 40 universities worldwide and top 10 in Latin America."
                />
              </Sticky>
            </Grid>
            <Grid item xs={12} md={8} lg={8} xl={9}>
              {/* Description */}
              <Box>
                <AddDescription />
              </Box>
              {/* Subchallenges */}
              <AddSubchallenges />
              {/* Agenda */}
              <AddAgenda data={agendaData} />
              {/* Advisors */}
              <AddAdvisors />
              {/* Prizes */}
              <AddPrizes />
              {/* Sponsors */}
              <AddSponsors />
            </Grid>
          </Grid>
        </Box>
      </FluidContainer>
    )
  }
}
export default DraftChallenge
