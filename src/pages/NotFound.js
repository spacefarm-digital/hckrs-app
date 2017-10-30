import React, { Component } from 'react'
import Isvg from 'react-inlinesvg'
import styled, { keyframes } from 'styled-components'
import { Link } from 'react-router-dom'

import FluidContainer from '../components/extended/FluidContainer'

import { Heading, Text, Measure, Flex, Box } from 'rebass'

import NotFoundSVG from '../assets/404.svg'

import Button from 'material-ui/Button'

const rotate360 = keyframes`
	0% {
    transform: rotate(0deg) scale(1);
  }
  
  50% {
    transform: rotate(180deg) scale(.9);
  }

	100% {
    transform: rotate(360deg) scale(1);
	}
`

const NotFoundIllustration = styled(Isvg)`
  #js-animate-hole {
    transform-origin: 50% 50%;
    display: block;
    animation: ${rotate360} 40s linear infinite;
    animation-fill-mode: forwards;
  }
`

class NotFound extends Component {
  render() {
    return (
      <FluidContainer pt={3} tight>
        <Box style={{ maxWidth: 550 }} mx="auto" mb={1}>
          <NotFoundIllustration src={NotFoundSVG} uniquifyIDs={false} />
        </Box>
        <Measure mx="auto">
          <Heading f={4} mb={2} center>
            Ooops!
          </Heading>
          <Text>
            You’ve hacked space-time itself. In this universe, the page you’re
            looking for doesn’t exist. You may have mistyped the address or the
            page may have been moved.
          </Text>
        </Measure>
        <Flex justify="center">
          <Button raised color="primary" component={Link} to="/">
            Go back home
          </Button>
        </Flex>
      </FluidContainer>
    )
  }
}
export default NotFound
