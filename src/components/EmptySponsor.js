import React from 'react'
import PropTypes from 'prop-types'
import Ink from 'react-ink'

import PrettyPaper from './extended/PrettyPaper'
import CleanA from './extended/CleanA'

import placeholder from '../assets/placeholder.jpg'

import { BackgroundImage, Text, Flex, Box } from 'rebass'

import TextField from 'material-ui/TextField'

import ImageField from '../components/ImageField'

import Button from 'material-ui/Button'

const EmptySponsor = props => (
  <PrettyPaper p={3}>
    <Flex justify="center" mb={2}>
      <ImageField required name="upload-avatar" />
    </Flex>
    <Box mb={3}>
      <TextField label="Sponsor name" fullWidth />
    </Box>
    <Flex justify="center">
      <Button raised color="accent">
        Done
      </Button>
    </Flex>
  </PrettyPaper>
)

export default EmptySponsor
