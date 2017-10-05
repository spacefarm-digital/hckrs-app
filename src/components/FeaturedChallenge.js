import React from 'react'
import styled from 'styled-components'
import Ink from 'react-ink'
import PropTypes from 'prop-types'
import Button from 'material-ui/Button'
import Paper from 'material-ui/Paper'
import CleanLink from '../components/extended/CleanLink'
import ShadowAvatar from '../components/extended/ShadowAvatar'
import RoundLink from '../components/extended/RoundLink'

import placeholder from '../assets/mv.jpg'
import placeholderLogo from '../assets/mv-icon.jpg'

import {
  BackgroundImage,
  Flex,
  Box,
  Heading,
  Text,
  Relative,
  Absolute,
  Measure,
} from 'rebass'

import Fade from '../components/Fade'

const propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  logo: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
}

const defaultProps = {
  title: 'Default title',
  image: placeholder,
  logo: placeholderLogo,
  url: '#',
}

const FeaturedChallengeWrapper = styled(BackgroundImage)`
  position: relative;
  border-radius: ${props => props.theme.radius};
  overflow: hidden;
  padding-bottom: 125%;
  transition: all 200ms cubic-bezier(0, 0, 0.2, 1);
  &:hover {
    opacity: 0.9;
  }
  @media (min-width: ${props => props.theme.breakpoints[0]}em) {
    padding-bottom: ${props => (props.big ? '40%' : '75%')};
  }
`

const FeaturedChallenge = props => {
  return (
    <CleanLink to={props.url}>
      <Paper>
        <FeaturedChallengeWrapper
          src={props.image}
          title="Contemplative Reptile"
          color="#fff"
          big={props.big}
        >
          <Absolute bottom left w={1} p={3} z={2}>
            <Relative z={2} pt={3}>
              <Flex align="center">
                <Box>
                  <ShadowAvatar src={props.logo} w="2em" mr={3} />
                </Box>
                <Heading is="h2" f={[3, 4]}>
                  {props.title}
                </Heading>
              </Flex>
            </Relative>
          </Absolute>
          <Fade />
          <Ink />
        </FeaturedChallengeWrapper>
      </Paper>
    </CleanLink>
  )
}

FeaturedChallenge.propTypes = propTypes
FeaturedChallenge.defaultProps = defaultProps

export default FeaturedChallenge
