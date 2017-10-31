// @flow weak

import React from 'react'
import PropTypes from 'prop-types'
import Card, { CardContent } from 'material-ui/Card'
import Button from 'material-ui/Button'
import PrettyLink from '../components/extended/PrettyLink'

import placeholder from '../assets/placeholder.jpg'

import { BackgroundImage, Flex, Box, Heading, Text } from 'rebass'

const propTypes = {
  title: PropTypes.string.isRequired,
  excerpt: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  category: PropTypes.string,
  author: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
}

const defaultProps = {
  title: 'Default title',
  excerpt:
    'Default description. It will actually be much, much, much longer. Not that much though.',
  image: placeholder,
  category: '✈️ Aviation',
  author: 'Author McAuthor',
  date: '01/01/2017',
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
            <PrettyLink to="/">{props.category}</PrettyLink>
            <Text>{props.date}</Text>
          </Flex>
          <Heading is="h3" f={2} mb={2}>
            {props.title}
          </Heading>
          <Text mb={2}>
            Published by <PrettyLink to="/">{props.author}</PrettyLink>
          </Text>
          <Text mb={3}>{props.excerpt}</Text>
          <Flex mx={-1} align="center">
            <Box px={1}>
              <Button raised color="primary">
                Continue reading
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
