import React from 'react'

import {
  Flex,
  Avatar,
  Button,
  Box,
  Text,
  Heading,
  ButtonCircle,
  BackgroundImage,
} from 'rebass'

import PrettyLink from '../components/extended/PrettyLink'

import placeholder from '../assets/placeholder.jpg'

import TextField from 'material-ui/TextField'

import FluidContainer from '../components/extended/FluidContainer'

const Footer = () => (
  <Box is="footer" bg="black" color="white" px={3} py={4}>
    <FluidContainer>
      <Box mb={4}>
        <Heading mb={1} f={[4, 5]}>
          hckrs (WIP)
        </Heading>
        <Text>Solving industry challenges one step at a time</Text>
      </Box>
      <Flex wrap mx={-2}>
        {/* Sitemap */}
        <Box w={[1, 1 / 2, 1 / 6]} mb={3} px={2}>
          <ul>
            <li>
              <PrettyLink to="/">Home</PrettyLink>
            </li>
            <li>
              <PrettyLink to="benefits">Benefits</PrettyLink>
            </li>
            <li>
              <PrettyLink to="challenges-index">Challenges</PrettyLink>
            </li>
            <li>
              <PrettyLink to="hackers-index">Hackers</PrettyLink>
            </li>
            <li>
              <PrettyLink to="news-index">News</PrettyLink>
            </li>
          </ul>
        </Box>
        {/* Social */}
        <Box w={[1, 1 / 2, 1 / 4]} mb={4} px={2}>
          <Text mb={2} bold>
            Connect with us:
          </Text>
          <Flex mx={-1}>
            <Box px={1}>
              <ButtonCircle bg="fb">F</ButtonCircle>
            </Box>
            <Box px={1}>
              <ButtonCircle bg="twitter">T</ButtonCircle>
            </Box>
            <Box px={1}>
              <ButtonCircle bg="github">G</ButtonCircle>
            </Box>
            <Box px={1}>
              <ButtonCircle bg="grey">E</ButtonCircle>
            </Box>
          </Flex>
        </Box>
        {/* Subscribe */}
        <Box w={[1, 1 / 2, 1 / 3]} mb={4} px={2}>
          <Text bold mb={2}>
            Stay up to date with new challenges, upcoming events and news
          </Text>
          <TextField placeholder="Your email here" />
          <Button w={1}>Subscribe</Button>
        </Box>
        {/* Illustration */}
        <Box w={[1, 1 / 2, 1 / 4]} mb={4} px={2}>
          <BackgroundImage src={placeholder} ratio={1 / 2} />
        </Box>
      </Flex>
      <Text f={0} bold center>
        Some fine print here, 2017
      </Text>
    </FluidContainer>
  </Box>
)

export default Footer
