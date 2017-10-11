import React, { Component } from 'react'
import PropTypes from 'prop-types'
import PrettyPaper from './extended/PrettyPaper'
import NameField from './extended/NameField'
import ImageField from './ImageField'

import { Flex, Box, Heading, Text } from 'rebass'

import TextField from 'material-ui/TextField'

import Radio, { RadioGroup } from 'material-ui/Radio'

import {
  FormLabel,
  FormControl,
  FormControlLabel,
  FormHelperText,
} from 'material-ui/Form'

class EmptyPrize extends React.Component {
  state = {
    value: 'Money',
  }
  handleChange = (event, value) => {
    this.setState({ value })
  }
  render() {
    return (
      <PrettyPaper p={3}>
        {/* Pick type of prize */}
        <Box mb={3}>
          <FormControl component="fieldset" fullWidth>
            <FormLabel component="legend">Type</FormLabel>
            <RadioGroup
              aria-label="Type"
              name="Type"
              value={this.state.value}
              onChange={this.handleChange}
              style={{ flexDirection: 'row' }}
            >
              <FormControlLabel
                value="Money"
                control={<Radio />}
                label="💰 Money"
              />
              <FormControlLabel
                value="Other"
                control={<Radio />}
                label="🎁 Other"
              />
            </RadioGroup>
          </FormControl>
        </Box>
        {this.state.value == 'Money' ? (
          <Box mb={2} f={2}>
            <NameField placeholder="Ammount" fullWidth center />
          </Box>
        ) : (
          <Flex justify="center" mb={2}>
            <ImageField required name="upload-image" />
          </Flex>
        )}
        <Box mb={2}>
          <TextField fullWidth label="Title" />
        </Box>
        <Box>
          <TextField fullWidth label="Description (optional)" multiline />
        </Box>
      </PrettyPaper>
    )
  }
}
export default EmptyPrize
