import React from 'react'
import Isvg from 'react-inlinesvg'

import { Flex, Box, Text, Heading } from 'rebass'

import Button from 'material-ui/Button'

import PrettyPaper from '../components/extended/PrettyPaper'
import PrettyLink from '../components/extended/PrettyLink'

import TextField from 'material-ui/TextField'

import FluidContainer from '../components/extended/FluidContainer'
import PrettySocialIcon from '../components/extended/PrettySocialIcon'

import footerSVG from '../assets/footer.svg'

import Emoji from '../components/Emoji'

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
              <Emoji accessibleName="newsletter">📩</Emoji>
              Subscribe to our newsletter
            </Heading>
            <Text bold mb={2}>
              Stay up to date with the hottest challenges, upcoming events and
              latest news.
            </Text>
            <Flex column align="center">
              <Box mb={2} w={1}>
                <TextField
                  fullWidth
                  placeholder="Your email adress goes here"
                  label="Enter your email adress"
                />
              </Box>
              <Button raised color="primary">
                Subscribe
              </Button>
            </Flex>
          </PrettyPaper>
        </Box>
        {/* Illustration */}
        <Flex w={[1, 1, 4 / 12]} mb={4} px={2} align="flex-end">
          <Isvg
            src={footerSVG}
            style={{
              width: '80%',
              display: 'block',
              marginLeft: 'auto',
              marginRight: 'auto',
            }}
          />
        </Flex>
      </Flex>
      <Text f={0} bold center color="g700">
        All rights reserved to Hckrs
      </Text>
    </FluidContainer>
  </Box>
)
export default Footer
