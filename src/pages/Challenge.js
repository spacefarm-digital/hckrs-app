/* eslint-disable flowtype/require-valid-file-annotation */

import React, { Component } from 'react'

import { Box, Heading, Sticky, Relative } from 'rebass'

import Dialog from 'material-ui/Dialog'
import Grid from 'material-ui/Grid'
import Paper from 'material-ui/Paper'

import ChallengePreview from '../components/ChallengePreview'
import HackPreview from '../components/HackPreview'
import ChallengeStats from '../components/ChallengeStats'
import Description from '../components/Description'
import Subchallenges from '../components/Subchallenges'
import Agenda from '../components/Agenda'
import Prizes from '../components/Prizes'
import Sponsors from '../components/Sponsors'

import ChallengeNav from '../components/ChallengeNav'

import FluidContainer from '../components/extended/FluidContainer'

// Fake data
import agendaData from '../data/agendaData'
import prizesData from '../data/prizesData'

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
              <Sticky mb={2} top z={2}>
                <ChallengeNav />
              </Sticky>
              <Box>
                <Description />
              </Box>
              {/* Subchallenges */}
              <Subchallenges />
              {/* Agenda */}
              <Agenda agenda={agendaData} />
              {/* Prizes */}
              <Prizes prizes={prizesData} />
              {/* Sponsors */}
              <Box>
                <Sponsors
                  sponsors={[
                    {
                      name: 'SponsorMcSponsor',
                      externalUrl: ['http://www.honeybadger.com'],
                      image:
                        'http://images.mentalfloss.com/sites/default/files/istock-498886489.jpg?resize=1100x740',
                    },
                    {
                      name: 'SponsorMcSponsor',
                      image:
                        'http://images.mentalfloss.com/sites/default/files/istock-498886489.jpg?resize=1100x740',
                    },
                    {
                      name: 'SponsorMcSponsor',
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
