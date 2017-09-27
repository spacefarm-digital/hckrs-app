import React, { Component } from 'react'

import TextField from 'material-ui/TextField'

import FilterItem from '../components/FilterItem'

import { Flex, Box } from 'rebass'

class NewChallengeMain extends React.Component {
  render() {
    return (
      <form>
        <Box mb={4}>
          <TextField
            required
            id="challengeName"
            label="Challenge Name"
            fullWidth
          />
        </Box>
        <Flex mb={4}>
          <FilterItem
            options={['📢 Public', '✉️ Invite-only', '🕶 Unlisted']}
            label="Challenge Type"
          />
        </Flex>
      </form>
    )
  }
}
export default NewChallengeMain
