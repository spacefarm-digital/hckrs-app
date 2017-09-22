// @flow weak

import React from 'react'
import PropTypes from 'prop-types'
import Card, { CardContent } from 'material-ui/Card'
import Button from 'material-ui/Button'
import { Link } from 'react-router-dom'

import placeholder from '../assets/placeholder.jpg'

import { BackgroundImage, Flex, Box, Heading, Text, Image } from 'rebass'

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

const HackPreview = props => {
  return (
    <div>
      <Card>
        <CardContent>
          <Heading is="h3" f={2}>
            {props.title}
          </Heading>
          <Text>
            In challenge <Link to="/">Challenge name</Link>
          </Text>
          <Text mb={3}>{props.description}</Text>
          <Flex mx={-1} justify="flex-end" align="center">
            <Box px={1}>
              <Button raised color="primary">
                See more
              </Button>
            </Box>
          </Flex>
        </CardContent>
      </Card>
    </div>
  )
}

HackPreview.propTypes = propTypes
HackPreview.defaultProps = defaultProps

export default HackPreview
