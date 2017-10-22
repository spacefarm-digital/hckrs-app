import React, { Component } from 'react'
import Isvg from 'react-inlinesvg'
import { Link } from 'react-router-dom'

import FluidContainer from '../components/extended/FluidContainer'

import { Heading, Text, Measure, Flex, Box } from 'rebass'

import NotFoundSVG from '../assets/testSVG/404.svg'

import Button from 'material-ui/Button'

class NotFound extends Component {
  render() {
    return (
      <FluidContainer pt={5} tight>
        <Measure mx="auto">
          <Heading f={4} mb={3} center>
            Ooops!
          </Heading>
          <Text>
            You’ve hacked space-time itself. In this universe, the page you’re
            looking for doesn’t exist. You may have mistyped the address or the
            page may have been moved.
          </Text>
        </Measure>
        <Box style={{ maxWidth: 600 }} mx="auto" mb={3}>
          <Isvg src={NotFoundSVG} />
        </Box>
        <Flex justify="center">
          <Button raised color="primary" component={Link} to="/MHome">
            Go back home
          </Button>
        </Flex>
      </FluidContainer>
    )
  }
}
export default NotFound
