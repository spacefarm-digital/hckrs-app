import React, { Component } from 'react'

import { Box, Sticky, Heading } from 'rebass'

import Grid from 'material-ui/Grid'

import ChallengeStats from '../components/ChallengeStats'
import HackPreview from '../components/HackPreview'
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

class Challenge extends Component {
  render() {
    return (
      <FluidContainer pt={3} is="main">
        <Box mb={3} pt={3}>
          <Grid container spacing={24}>
            {/* Brief */}
            <Grid item xs={12} md={4} lg={4} xl={3}>
              <Sticky top>
                <ChallengeStats
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
              <ChallengeNav />
              <Box mb={3}>
                <Heading is="h2" f={3} mb={2} color="pA400">
                  Hacks
                </Heading>
                <Grid container>
                  {[0, 1, 2].map(value => (
                    <Grid xs={12} sm={6} item>
                      <HackPreview />
                    </Grid>
                  ))}
                </Grid>
              </Box>
              <Box>
                <Description />
              </Box>
              {/* Subchallenges */}
              <Subchallenges />
              {/* Agenda */}
              <Agenda data={agendaData} />
              {/* Advisors */}
              <Advisors data={advisorsData} />
              {/* Participants */}
              <Participants data={participantsData} />
              {/* Prizes */}
              <Prizes data={prizesData} />
              {/* Sponsors */}
              <Box>
                <Sponsors
                  sponsors={[
                    {
                      name: 'Sponsor McSponsor',
                      externalUrl: ['http://www.honeybadger.com'],
                      image:
                        'http://images.mentalfloss.com/sites/default/files/istock-498886489.jpg?resize=1100x740',
                    },
                    {
                      name: 'Sponsor McSponsor',
                      image:
                        'http://images.mentalfloss.com/sites/default/files/istock-498886489.jpg?resize=1100x740',
                    },
                    {
                      name: 'Sponsor McSponsor',
                      image:
                        'http://images.mentalfloss.com/sites/default/files/istock-498886489.jpg?resize=1100x740',
                    },
                  ]}
                />
              </Box>
            </Grid>
          </Grid>
        </Box>
      </FluidContainer>
    )
  }
}
export default Challenge
