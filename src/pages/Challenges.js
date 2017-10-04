/* eslint-disable flowtype/require-valid-file-annotation */

import React from 'react'

import { Container } from 'rebass'

import Grid from 'material-ui/Grid'

import ChallengeFilter from '../components/ChallengeFilter'
import ChallengePreview from '../components/ChallengePreview'
import PageTitle from '../components/PageTitle'
import FeaturedChallenges from '../components/FeaturedChallenges'

import BusinessIcon from 'material-ui-icons/Business'

import nasaBG from '../assets/nasa-bg.png'

const featuredChallengesData = [
  {
    title: 'Hack MTY',
    url: 'http://www.honeybadger.com',
    image: 'http://www.edmundsumner.co.uk/photos/1136.jpg',
    logo:
      'https://s3.amazonaws.com/assets.mlh.io/events/logos/000/000/392/thumb/e722cf7c0b4d-hackmtyMLH_100x100.png?1467906270',
  },
  {
    title: 'Boilermake',
    url: 'http://www.honeybadger.com',
    image: nasaBG,
    logo: 'https://boilermake.org/static/media/hammers.d3f13b1a.svg',
  },
  {
    title: 'BigRed//Hacks',
    url: 'http://www.honeybadger.com',
    image: 'https://bigredhacks.com/img/f2017/header.png',
    logo:
      'https://s3.amazonaws.com/assets.mlh.io/events/logos/000/000/684/thumb/bigred_logo.png?1500042878',
  },
]

const normalChallengesData = [
  {
    title: 'Hack MTY',
    url: 'http://www.honeybadger.com',
    image: 'http://www.edmundsumner.co.uk/photos/1136.jpg',
    logo:
      'https://s3.amazonaws.com/assets.mlh.io/events/logos/000/000/392/thumb/e722cf7c0b4d-hackmtyMLH_100x100.png?1467906270',
    numberOfHacks: 32,
  },
  {
    title: 'Boilermake',
    url: 'http://www.honeybadger.com',
    image: nasaBG,
    logo: 'https://boilermake.org/static/media/hammers.d3f13b1a.svg',
    numberOfHacks: 4,
  },
  {
    title: 'BigRed//Hacks',
    url: 'http://www.honeybadger.com',
    image: 'https://bigredhacks.com/img/f2017/header.png',
    logo:
      'https://s3.amazonaws.com/assets.mlh.io/events/logos/000/000/684/thumb/bigred_logo.png?1500042878',
    numberOfHacks: 87,
  },
]

const Challenges = () => (
  <div>
    <PageTitle title="Challenges">
      <BusinessIcon />
    </PageTitle>
    <FeaturedChallenges challenges={featuredChallengesData} />
    <ChallengeFilter />
    <Container is="main">
      <Grid container>
        {normalChallengesData.map((challenge, value) => (
          <Grid xs={12} sm={6} lg={4} xl={3} key={value} item>
            <ChallengePreview
              title={challenge.title}
              image={challenge.image}
              logo={challenge.logo}
              numberOfHacks={challenge.numberOfHacks}
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  </div>
)

export default Challenges
