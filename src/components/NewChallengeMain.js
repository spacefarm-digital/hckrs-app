import React, { Component } from 'react'

import TextField from 'material-ui/TextField'
import Grid from 'material-ui/Grid'

import FilterItem from '../components/FilterItem'
import ImageField from '../components/ImageField'
import CategoriesField from '../components/CategoriesField'
import RadioControl from '../components/RadioControl'
import NameField from '../components/extended/NameField'

import { Flex, Box } from 'rebass'

import { placeholder } from '../assets/placeholder.jpg'

class NewChallengeMain extends React.Component {
  render() {
    return (
      <div>
        <Box mb={3} pt={2}>
          <Grid container align="center">
            {/* Upload avatar */}
            <Grid item xs={12} sm={3} md={2}>
              <Flex justify="center">
                <ImageField required id="challengeAvatar" />
              </Flex>
            </Grid>
            {/* Challenge name */}
            <Grid item xs={12} sm={9} md={10}>
              <NameField
                required
                id="challengeName"
                fullWidth
                f={[3, 3, 4]}
                placeholder="Challenge name"
                inputProps={{
                  'aria-label': 'Challenge name',
                }}
              />
            </Grid>
          </Grid>
        </Box>
        {/* Challenge categories */}
        <Flex mb={3}>
          <CategoriesField
            required
            id="challengeCategories"
            label="Categories"
            fullWidth
          />
        </Flex>
        {/* Challenge time span */}
        <Flex mb={3} mx={-2}>
          <Box px={2} w={1 / 2}>
            <TextField
              id="challengeStartDate"
              label="⏳ Start date"
              type="date"
              defaultValue="2017-10-01"
              fullWidth
              InputLabelProps={{
                shrink: true,
              }}
            />
          </Box>
          <Box px={2} w={1 / 2}>
            <TextField
              id="challengeEndDate"
              label="⏳ End date"
              type="date"
              defaultValue="2017-10-03"
              fullWidth
              InputLabelProps={{
                shrink: true,
              }}
            />
          </Box>
        </Flex>
        {/* Challenge location */}
        <Flex mb={3}>
          <TextField
            required
            id="challengeLocation"
            label="🌎 Location"
            fullWidth
          />
        </Flex>
        {/* Challenge type */}
        <Flex mb={3}>
          <RadioControl
            items={['📢 Public', '✉️ Invite-only', '🕶 Unlisted']}
            label="Challenge Type"
          />
        </Flex>
      </div>
    )
  }
}
export default NewChallengeMain
