import React, { Component } from 'react'

import { Box, Sticky } from 'rebass'

import Grid from 'material-ui/Grid'

import HackStats from '../components/HackStats'
import Description from '../components/Description'
import Subchallenges from '../components/Subchallenges'
import Agenda from '../components/Agenda'
import Participants from '../components/Participants'
import Prizes from '../components/Prizes'
import Advisors from '../components/Advisors'
import Sponsors from '../components/Sponsors'

import ChallengeNav from '../components/ChallengeNav'

import FluidContainer from '../components/extended/FluidContainer'

// Fake data
import agendaData from '../data/agendaData'
import prizesData from '../data/prizesData'
import advisorsData from '../data/advisorsData'
import participantsData from '../data/participantsData'

class Hack extends Component {
  render() {
    return (
      <FluidContainer pt={3} is="main">
        <Box mb={3} pt={3}>
          <Grid container spacing={24}>
            {/* Brief */}
            <Grid item xs={12} md={4} lg={4} xl={3}>
              <Sticky top>
                <HackStats
                  name="Hack Name"
                  bio="Bio text. This will be a little bit longer, closer to a Twitter bio"
                  categories={['Media', 'Transport', 'Chemical']}
                  image="http://www.history.com/s3static/video-thumbnails/AETN-History_VMS/21/133/History_Invention_of_the_Lightbulb_40572_SF_HD_1104x622-16x9.jpg"
                  brief="This is the largest student hackathon in Mexico. Hosted by Tec de Monterrey, ranked 5 stars by QS, in the top 40 universities worldwide and top 10 in Latin America."
                />
              </Sticky>
            </Grid>
            <Grid item xs={12} md={8} lg={8} xl={9}>
              <Box>
                <Description />
              </Box>
              {/* Subchallenges */}
              <Subchallenges />
              {/* Participants */}
              <Participants data={participantsData} />
            </Grid>
          </Grid>
        </Box>
      </FluidContainer>
    )
  }
}
export default Hack
