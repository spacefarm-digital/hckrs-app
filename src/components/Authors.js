import React from 'react'
import PropTypes from 'prop-types'
import ScrollableAnchor from 'react-scrollable-anchor'

import { Box, Heading, Flex } from 'rebass'

import CleanLink from '../components/extended/CleanLink'

import ProfilePreview from './ProfilePreview'

import Grid from 'material-ui/Grid'
import Button from 'material-ui/Button'

const propTypes = {
  participants: PropTypes.array.isRequired,
}

const Authors = props => (
  <ScrollableAnchor id="challenge-participants">
    <Box mb={4}>
      <Heading is="h2" f={3} mb={3} color="pA400">
        Authors
      </Heading>
      <Box mb={3}>
        <Grid container align="stretch">
          {props.data.map((participant, index) => (
            <Grid item xs={6} sm={4} lg={3} xl={2}>
              <CleanLink to="/profile">
                <ProfilePreview
                  compact
                  name={participant.name}
                  avatar={participant.avatar}
                  categories={participant.categories}
                />
              </CleanLink>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  </ScrollableAnchor>
)

Authors.PropTypes = propTypes

export default Authors
