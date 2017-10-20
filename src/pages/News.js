/* eslint-disable flowtype/require-valid-file-annotation */

import React from 'react'

import Grid from 'material-ui/Grid'

import NewsPreview from '../components/NewsPreview'
import PageTitle from '../components/PageTitle'
import NewsFilter from '../components/NewsFilter'
import FluidContainer from '../components/extended/FluidContainer'

import ArtTrackIcon from 'material-ui-icons/ArtTrack'

const News = () => (
  <div>
    <FluidContainer>
      <PageTitle title="News">
        <ArtTrackIcon />
      </PageTitle>
    </FluidContainer>
    <NewsFilter />
    <FluidContainer is="main">
      <Grid container>
        {[0, 1, 2].map(value => (
          <Grid xs={12} sm={6} lg={4} xl={3} key={value} item>
            <NewsPreview />
          </Grid>
        ))}
      </Grid>
    </FluidContainer>
  </div>
)

export default News
