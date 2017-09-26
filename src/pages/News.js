/* eslint-disable flowtype/require-valid-file-annotation */

import React from 'react'

import { Container } from 'rebass'

import Grid from 'material-ui/Grid'

import NewsPreview from '../components/NewsPreview'
import PageTitle from '../components/PageTitle'
import NewsFilter from '../components/NewsFilter'

import FiberNewIcon from 'material-ui-icons/FiberNew'

const News = () => (
  <div>
    <PageTitle title="News">
      <FiberNewIcon />
    </PageTitle>
    <NewsFilter />
    <Container is="main">
      <Grid container>
        {[0, 1, 2].map(value => (
          <Grid xs={12} sm={6} lg={4} xl={3} key={value} item>
            <NewsPreview />
          </Grid>
        ))}
      </Grid>
    </Container>
  </div>
)

export default News
