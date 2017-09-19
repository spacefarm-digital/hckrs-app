// @flow weak

import React from 'react'
import PropTypes from 'prop-types'
import Card, { CardContent } from 'material-ui/Card'
import Button from 'material-ui/Button'
import { Link } from 'react-router-dom'

import placeholder from '../assets/placeholder.jpg'

import { BackgroundImage, Flex, Heading, Text, Image } from 'rebass'

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
    'Default description. It will actually be much, much, much longer. Not that much though.',
  image: placeholder,
  location: 'The world',
  date: '01/01/2017',
  numberOfHacks: 0,
  status: 'Upcoming',
  logo: placeholder,
}

const ChallengePreview = props => {
  return (
    <div>
      <Card>
        <BackgroundImage
          src={props.image}
          title="Contemplative Reptile"
          ratio={1 / 2}
        />
        <CardContent>
          <Flex justify="space-between" mb={2}>
            <Text>{props.categories}</Text>
            <Text>{props.status}</Text>
          </Flex>
          <Flex align="center" mb={3}>
            <Image src={props.logo} mr={2} w={40} />
            <Heading is="h2" f={3}>
              {props.title}
            </Heading>
          </Flex>
          <Text mb={3}>{props.description}</Text>
          <Flex justify="space-between" align="center">
            <Button color="primary" component={Link} to="/">
              {props.numberOfHacks} joined
            </Button>
            <Button raised color="primary">
              See more
            </Button>
          </Flex>
        </CardContent>
      </Card>
    </div>
  )
}

ChallengePreview.propTypes = propTypes
ChallengePreview.defaultProps = defaultProps

export default ChallengePreview
