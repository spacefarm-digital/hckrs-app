// @flow weak

import React from 'react'
import PropTypes from 'prop-types'
import Card, { CardContent } from 'material-ui/Card'
import Button from 'material-ui/Button'
import { Link } from 'react-router-dom'

import CleanLink from './extended/CleanLink'

import ShadowAvatar from './extended/ShadowAvatar'

import placeholder from '../assets/placeholder.jpg'

import { BackgroundImage, Flex, Box, Heading, Text } from 'rebass'

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
  url: PropTypes.string.isRequired,
}

const defaultProps = {
  title: 'Default title',
  description:
    'Default description. It will actually be much, much, much longer. Not that much though.',
  image: placeholder,
  location: 'The world',
  date: '01/01/2017',
  numberOfHacks: 0,
  status: 'Upcoming',
  logo: placeholder,
  url: '#',
}

const ChallengePreview = props => {
  return (
    <div>
      <Card>
        <CleanLink to="#">
          <BackgroundImage
            src={props.image}
            title="Contemplative Reptile"
            ratio={1 / 2}
          />
        </CleanLink>
        <CardContent>
          <Flex justify="space-between" mb={2}>
            <Text>{props.categories}</Text>
            <Text bold color="g600">
              {props.status}
            </Text>
          </Flex>
          <Flex align="center" mb={2} is={CleanLink} to="#">
            <ShadowAvatar src={props.logo} mr=".5em" w="2em" />
            <Heading is="h3" f={2}>
              {props.title}
            </Heading>
          </Flex>
          <Text mb={3}>{props.description}</Text>
          <Flex mx={-1} justify="flex-end" align="center">
            <Box px={1}>
              <Button color="primary" component={Link} to="#">
                {props.numberOfHacks} submitted hacks
              </Button>
            </Box>
            <Box px={1}>
              <Button raised color="primary" component={Link} to={props.url}>
                See more
              </Button>
            </Box>
          </Flex>
        </CardContent>
      </Card>
    </div>
  )
}

ChallengePreview.propTypes = propTypes
ChallengePreview.defaultProps = defaultProps

export default ChallengePreview
