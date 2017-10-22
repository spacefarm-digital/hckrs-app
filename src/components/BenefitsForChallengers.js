import React from 'react'
import Isvg from 'react-inlinesvg'

import Grid from 'material-ui/Grid'
import Button from 'material-ui/Button'

import PrettyPaper from './extended/PrettyPaper'

import hackathonOrganizerSVG from '../assets/testSVG/event-organizers.svg'
import companyExternalSVG from '../assets/testSVG/company-external.svg'
import companyInternalSVG from '../assets/testSVG/company-internal.svg'

import { Heading, Flex, Box, Container, Text, Measure } from 'rebass'

const BenefitsForChallengers = props => (
  <Box>
    <Box mb={4}>
      <Grid container spacing={24}>
        <Grid item xs={12} sm={4}>
          <PrettyPaper p={3} equalHeight>
            <Box mb={3}>
              <Isvg src={hackathonOrganizerSVG} />
            </Box>
            <Heading f={2} mb={1} center>
              I'm a hackathon organizer
            </Heading>
            <Text>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet
              assumenda nam error praesentium soluta sequi vitae quia excepturi
              culpa eum deleniti modi voluptas animi a, nobis debitis illo quam
              architecto?
            </Text>
          </PrettyPaper>
        </Grid>
        <Grid item xs={12} sm={4}>
          <PrettyPaper p={3} equalHeight>
            <Box mb={3}>
              <Isvg src={companyExternalSVG} />
            </Box>
            <Heading f={2} mb={1} center>
              Company external
            </Heading>
            <Text>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet
              assumenda nam error praesentium soluta sequi vitae quia excepturi
              culpa eum deleniti modi voluptas animi a, nobis debitis illo quam
              architecto?
            </Text>
          </PrettyPaper>
        </Grid>
        <Grid item xs={12} sm={4}>
          <PrettyPaper p={3} equalHeight>
            <Box mb={3}>
              <Isvg src={companyInternalSVG} />
            </Box>
            <Heading f={2} mb={1} center>
              Company Internal
            </Heading>
            <Text>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet
              assumenda nam error praesentium soluta sequi vitae quia excepturi
              culpa eum deleniti modi voluptas animi a, nobis debitis illo quam
              architecto?
            </Text>
          </PrettyPaper>
        </Grid>
      </Grid>
    </Box>
    <Measure mx="auto">
      <Heading is="h2" f={3} mb={1}>
        One more heading
      </Heading>
      <Text mb={3}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Est magnam vero
        maxime non, libero maiores mollitia quo recusandae porro odio a ipsam,
        asperiores accusamus, delectus perspiciatis quos earum tempore expedita.
      </Text>
      <Heading is="h2" f={3} mb={1}>
        One more heading
      </Heading>
      <Text mb={3}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Est magnam vero
        maxime non, libero maiores mollitia quo recusandae porro odio a ipsam,
        asperiores accusamus, delectus perspiciatis quos earum tempore expedita.
      </Text>
      <Flex justify="center" wrap>
        <Heading is="h2" f={4} mb={3} center w={1}>
          Let's give it a go!
        </Heading>
        <Button raised color="primary">
          Get started
        </Button>
      </Flex>
    </Measure>
  </Box>
)

export default BenefitsForChallengers
