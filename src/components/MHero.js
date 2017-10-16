import React from 'react'
import Isvg from 'react-inlinesvg'
import heroSVG from '../assets/testSVG/welcome.svg'

import { Heading, Text, Measure, Image, Flex, Box } from 'rebass'

import FluidContainer from '../components/extended/FluidContainer'

import Grid from 'material-ui/Grid'
import Button from 'material-ui/Button'

const MHero = props => (
  <Box bg="white" pt={[4, 4, 5]} is="section">
    <FluidContainer mx={-3} gutterless>
      <Grid container align="center" spacing={0}>
        <Grid item xs={12} md={7}>
          <Box px={3} mb={3}>
            <Isvg src={heroSVG} />
          </Box>
        </Grid>
        <Grid item xs={12} md={5}>
          <Flex column align="center">
            <Box mb={[4, 4, 5]} px={3}>
              <Heading f={[3, 4, 4, 5]} mb={2}>
                Welcome to Hckrs
              </Heading>
              <Measure mb={4}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
                commodi distinctio facilis atque magnam ut reprehenderit, porro
                eius iure nemo est tenetur sed officia officiis eaque eum
                deserunt rerum itaque!
              </Measure>
              <Button raised color="accent" href="/signup">
                Let's get started!
              </Button>
            </Box>
          </Flex>
        </Grid>
      </Grid>
    </FluidContainer>
  </Box>
)

export default MHero
