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

import PrettyPaper from '../components/extended/PrettyPaper'
import PrettyLink from '../components/extended/PrettyLink'

import placeholder from '../assets/placeholder.jpg'

import TextField from 'material-ui/TextField'

import FluidContainer from '../components/extended/FluidContainer'
import PrettySocialIcon from '../components/extended/PrettySocialIcon'

const Footer = () => (
  <Box is="footer" bg="g900" color="white" py={4}>
    <FluidContainer>
      <Flex wrap mx={-2}>
        {/* Sitemap */}
        <Box w={[1, 1 / 2, 3 / 12]} mb={3} px={2}>
          <Heading mb={1} f={[4, 5]} is="h2">
            hckrs
          </Heading>
          <Text mb={2}>Solving industry challenges one step at a time</Text>
          {/* Sitemap */}
          <Box is="ul" mb={3}>
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
          </Box>
          {/* Social */}
          <Flex wrap mx={-1}>
            <Box px={1} mb={2}>
              <PrettySocialIcon
                url="http://twitter.com/hckrs"
                style={{ height: 36, width: 36 }}
              />
            </Box>
            <Box px={1} mb={2}>
              <PrettySocialIcon
                url="http://facebook.com/hckrs"
                style={{ height: 36, width: 36 }}
              />
            </Box>
            <Box px={1} mb={2}>
              <PrettySocialIcon
                url="http://github.com/hckrs"
                style={{ height: 36, width: 36 }}
              />
            </Box>
            <Box px={1} mb={2}>
              <PrettySocialIcon
                url="mailto:hckrs@hckrs.eu"
                style={{ height: 36, width: 36 }}
              />
            </Box>
          </Flex>
        </Box>
        {/* Subscribe */}
        <Box w={[1, 1 / 2, 5 / 12]} mb={4} px={2}>
          <PrettyPaper p={3} pt={4} color="g900">
            <Heading f={3} center mb={3}>
              📩 Subscribe to our newsletter
            </Heading>
            <Text bold mb={2}>
              Stay up to date with new challenges, upcoming events and news
            </Text>
            <Box mb={2}>
              <TextField
                fullWidth
                placeholder="Your email here"
                label="Email"
              />
            </Box>
            <Button w={1}>Subscribe</Button>
          </PrettyPaper>
        </Box>
        {/* Illustration */}
        <Box w={[1, 1, 4 / 12]} mb={4} px={2}>
          <BackgroundImage src={placeholder} ratio={1 / 2} />
        </Box>
      </Flex>
      <Text f={0} bold center color="g700">
        All rights reserved to Hckrs
      </Text>
    </FluidContainer>
  </Box>
)
export default Footer
