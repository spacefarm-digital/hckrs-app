import React, { Component } from 'react'

import Grid from 'material-ui/Grid'

import { Heading, Box } from 'rebass'

import NewsPreview from './NewsPreview'

class FeaturedNews extends React.Component {
  render() {
    return (
      <Box mb={4} pt={4}>
        <Heading f={3} is="h2" mb={3}>
          Latest news
        </Heading>
        <Grid container>
          {[0, 1, 2].map(value => (
            <Grid xs={12} sm={6} lg={4} xl={3} key={value} item>
              <NewsPreview />
            </Grid>
          ))}
        </Grid>
      </Box>
    )
  }
}

export default FeaturedNews
