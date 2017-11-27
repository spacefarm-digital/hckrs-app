// @flow weak

import React from 'react'
import PropTypes from 'prop-types'
import Card, { CardContent } from 'material-ui/Card'
import Button from 'material-ui/Button'
import CleanLink from '../components/extended/CleanLink'
import PrettyLink from '../components/extended/PrettyLink'

import placeholder from '../assets/placeholder.jpg'

import { Flex, Box, Heading, Text, BackgroundImage } from 'rebass'

const propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  categories: PropTypes.arrayOf(PropTypes.string),
  url: PropTypes.string,
}

const defaultProps = {
  title: 'Hack name',
  description:
    'Default description. It will actually be much, much, much longer. Not that much though.',
  image: placeholder,
  url: '/hacks',
}

const HackPreview = props => {
  return (
    <CleanLink to={props.url}>
      <Card>
        <BackgroundImage src={placeholder} />
        <CardContent>
          <Heading is="h3" f={2} mb={2}>
            {props.title}
          </Heading>
          <Text>{props.description}</Text>
        </CardContent>
      </Card>
    </CleanLink>
  )
}

HackPreview.propTypes = propTypes
HackPreview.defaultProps = defaultProps

export default HackPreview
