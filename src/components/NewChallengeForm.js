import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import TextField from 'material-ui/TextField'
import Grid from 'material-ui/Grid'
import Button from 'material-ui/Button'

import FilterItem from '../components/FilterItem'
import ImageField from '../components/ImageField'
import CategoriesField from '../components/CategoriesField'
import RadioControl from '../components/RadioControl'
import NameField from '../components/extended/NameField'
import PrettyPaper from '../components/extended/PrettyPaper'

import { Flex, Box } from 'rebass'

import { placeholder } from '../assets/placeholder.jpg'

class NewChallengeMain extends React.Component {
  render() {
    return (
      <PrettyPaper p={3}>
        {/* Avatar + name */}
        <Box mb={4} pt={2}>
          <Grid container align="center">
            {/* Upload avatar */}
            <Grid item xs={12} sm={3} md={2}>
              <Flex justify="center">
                <ImageField required name="upload-avatar" />
              </Flex>
            </Grid>
            {/* Challenge name */}
            <Grid item xs={12} sm={9} md={10}>
              <NameField
                required
                id="challengeName"
                fullWidth
                f={[3, 3, 4]}
                placeholder="Enter challenge name"
                inputProps={{
                  'aria-label': 'Challenge name',
                }}
              />
            </Grid>
          </Grid>
        </Box>
        {/* Challenge time span */}
        <Flex mb={4} mx={-2}>
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
        <Flex wrap mx={-2}>
          {/* Challenge location */}
          <Box mb={4} px={2} w={[1, 1, 1 / 2]}>
            <TextField
              required
              id="challengeLocation"
              label="🌎 Location"
              fullWidth
            />
          </Box>
          {/* Description */}
          <Box mb={4} px={2} w={[1, 1, 1 / 2]}>
            <TextField
              required
              id="challengeDescription"
              label="📖 Enter short challenge info"
              fullWidth
            />
          </Box>
        </Flex>
        {/* Challenge categories */}
        <Flex mb={4}>
          <CategoriesField required id="challengeCategories" />
        </Flex>
        {/* Challenge type */}
        <Flex mb={4}>
          <RadioControl
            items={['📢 Public', '✉️ Invite-only', '🕶 Unlisted']}
            label="Challenge Type"
          />
        </Flex>
        <Flex justify="flex-end">
          <Button raised color="accent" component={Link} to="/draft-challenge">
            Create challenge!
          </Button>
        </Flex>
      </PrettyPaper>
    )
  }
}
export default NewChallengeMain
