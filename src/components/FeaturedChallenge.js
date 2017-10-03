import React from 'react'
import styled from 'styled-components'
import Ink from 'react-ink'
import PropTypes from 'prop-types'
import Button from 'material-ui/Button'
import Paper from 'material-ui/Paper'
import CleanLink from '../components/extended/CleanLink'

import placeholder from '../assets/mv.jpg'
import placeholderLogo from '../assets/mv-icon.jpg'

import {
  BackgroundImage,
  Flex,
  Box,
  Heading,
  Text,
  Avatar,
  Relative,
  Absolute,
  Measure,
} from 'rebass'

import Fade from '../components/Fade'

const propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  categories: PropTypes.arrayOf(PropTypes.string),
  location: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  numberOfHacks: PropTypes.number.isRequired,
  status: PropTypes.oneOf(['Active', 'Upcoming', 'Past']).isRequired,
  logo: PropTypes.string.isRequired,
}

const defaultProps = {
  title: 'Default title',
  description:
    'Default description. It will actually be much, much, much longer. Not that much though...',
  image: placeholder,
  location: 'The world',
  date: '01/01/2017',
  numberOfHacks: 0,
  status: 'Upcoming',
  logo: placeholderLogo,
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
    <Paper component={CleanLink} to="#">
      <FeaturedChallengeWrapper
        src={props.image}
        title="Contemplative Reptile"
        color="#fff"
        big={props.big}
      >
        <Box>
          <Absolute top right p={3} z={2}>
            <Avatar src={props.logo} w="2em" />
          </Absolute>
          <Absolute bottom left w={1} p={3} z={2}>
            <Measure>
              <Relative z={2} pt={3}>
                <Heading is="h2" f={2} mb={2}>
                  {props.title}
                </Heading>
                <Text>{props.description}</Text>
              </Relative>
            </Measure>
            <Fade />
          </Absolute>
        </Box>
        <Ink />
      </FeaturedChallengeWrapper>
    </Paper>
  )
}

FeaturedChallenge.propTypes = propTypes
FeaturedChallenge.defaultProps = defaultProps

export default FeaturedChallenge
