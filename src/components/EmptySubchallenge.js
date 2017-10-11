import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import PrettyPaper from './extended/PrettyPaper'

import { Text, Flex, Box } from 'rebass'

import Button from 'material-ui/Button'
import TextField from 'material-ui/TextField'

import TypeIcon from './extended/TypeIcon'

import FlagIcon from 'material-ui-icons/Flag'

import NameField from './extended/NameField'

const propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
}

const defaultProps = {
  title: 'Subchallenge title',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sed sapien quam. Sed dapibus est id enim facilisis, at posuere turpis adipiscing. Quisque sit amet dui dui.',
}

const EmptySubchallenge = props => (
  <PrettyPaper p={3}>
    <Flex f={2} mb={2} w={1}>
      <Box mr={2}>
        <TypeIcon color="primary">
          <FlagIcon />
        </TypeIcon>
      </Box>
      <Box w={1}>
        <NameField placeholder="Subchallenge name" fullWidth>
          {props.title}
        </NameField>
      </Box>
    </Flex>
    <Box mb={3}>
      <TextField label="Description" rowsMax={4} multiline fullWidth />
    </Box>
    <Flex justify="flex-end">
      <Button color="accent" raised>
        Done
      </Button>
    </Flex>
  </PrettyPaper>
)

EmptySubchallenge.PropTypes = propTypes
EmptySubchallenge.defaultProps = defaultProps

export default EmptySubchallenge
