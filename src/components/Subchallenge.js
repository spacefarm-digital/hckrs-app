import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import PrettyPaper from './extended/PrettyPaper'

import { Heading, Text, Flex } from 'rebass'

import Button from 'material-ui/Button'

import TypeIcon from './extended/TypeIcon'

import FlagIcon from 'material-ui-icons/Flag'

const propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
}

const defaultProps = {
  title: 'Subchallenge title',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sed sapien quam. Sed dapibus est id enim facilisis, at posuere turpis adipiscing. Quisque sit amet dui dui.',
}

const Subchallenge = props => (
  <PrettyPaper p={3}>
    <Heading f={2} mb={2}>
      <TypeIcon color="primary">
        <FlagIcon />
      </TypeIcon>
      {props.title}
    </Heading>
    <Text mb={3}>{props.description}</Text>
    <Flex justify="flex-end">
      <Button raised color="accent">
        Submit a hack
      </Button>
    </Flex>
  </PrettyPaper>
)

Subchallenge.PropTypes = propTypes
Subchallenge.defaultProps = defaultProps

export default Subchallenge
