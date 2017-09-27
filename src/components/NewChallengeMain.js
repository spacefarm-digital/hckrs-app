import React, { Component } from 'react'

import TextField from 'material-ui/TextField'
import Grid from 'material-ui/Grid'

import FilterItem from '../components/FilterItem'
import ImageField from '../components/ImageField'

import { Flex, Box } from 'rebass'

import { placeholder } from '../assets/placeholder-avatar.jpg'

class NewChallengeMain extends React.Component {
  render() {
    return (
      <div>
        <Box mb={4}>
          <Grid container>
            <Grid item xs={12} sm={3}>
              <Flex justify="center">
                <ImageField
                  placeholder={placeholder}
                  required
                  id="challengeAvatar"
                />
              </Flex>
            </Grid>
            <Grid item xs={12} sm={9}>
              <TextField
                required
                id="challengeName"
                label="Challenge Name"
                fullWidth
              />
            </Grid>
          </Grid>
        </Box>
        <Flex mb={4}>
          <FilterItem
            options={['📢 Public', '✉️ Invite-only', '🕶 Unlisted']}
            label="Challenge Type"
          />
        </Flex>
      </div>
    )
  }
}
export default NewChallengeMain
