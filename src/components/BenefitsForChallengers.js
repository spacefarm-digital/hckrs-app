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
            Expand your reach.
            </Heading>
            <Text>
            Struggling to find the right people for your hackathon event? We're here to to help. Create a challenge to get your event noticed among designers, engineers, and technology experts.
            </Text>
          </PrettyPaper>
        </Grid>
        <Grid item xs={12} sm={4}>
          <PrettyPaper p={3} equalHeight>
            <Box mb={3}>
              <Isvg src={companyExternalSVG} />
            </Box>
            <Heading f={2} mb={1} center>
              Extra brainpower.
            </Heading>
            <Text>
            Your company is on the verge of a breakthrough, but you need more brainpower to make it happen? We might have the right hackers to help you propel your business forward.   
            </Text>
          </PrettyPaper>
        </Grid>
        <Grid item xs={12} sm={4}>
          <PrettyPaper p={3} equalHeight>
            <Box mb={3}>
              <Isvg src={companyInternalSVG} />
            </Box>
            <Heading f={2} mb={1} center>
              Nurture ideas.
            </Heading>
            <Text>
            Get the most out of your company employees by creating exciting challenges, designed especially for them and their profile. Nurture their potential and grow your business.  
            </Text>
          </PrettyPaper>
        </Grid>
      </Grid>
    </Box>
    <Measure mx="auto">
      <Heading is="h2" f={3} mb={1}>
       One more thing
      </Heading>
      <Text mb={3}>
       Remember that every breakthrough idea starts with solving a common problem. 
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
          Sign up to create a challenge!
        </Heading>
        <Button raised color="primary">
          Sign up
        </Button>
      </Flex>
    </Measure>
  </Box>
)

export default BenefitsForChallengers
