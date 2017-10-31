import React from 'react'

import Grid from 'material-ui/Grid'

import ChallengeFilter from '../components/ChallengeFilter'
import ChallengePreview from '../components/ChallengePreview'
import PageTitle from '../components/PageTitle'
import FeaturedChallenges from '../components/FeaturedChallenges'
import FluidContainer from '../components/extended/FluidContainer'

import DvrIcon from 'material-ui-icons/Dvr'

// Fake data
import normalChallengesData from '../data/normalChallengesData'
import featuredChallengesData from '../data/featuredChallengesData'

const Challenges = () => (
  <main>
    <FluidContainer>
      <PageTitle title="Challenges">
        <DvrIcon />
      </PageTitle>
      <FeaturedChallenges challenges={featuredChallengesData} />
    </FluidContainer>
    <ChallengeFilter />
    <FluidContainer>
      <Grid container>
        {normalChallengesData.map((challenge, value) => (
          <Grid xs={12} sm={6} lg={4} xl={3} key={value} item>
            <ChallengePreview
              title={challenge.title}
              image={challenge.image}
              logo={challenge.logo}
              numberOfHacks={challenge.numberOfHacks}
              url={challenge.url}
            />
          </Grid>
        ))}
      </Grid>
    </FluidContainer>
  </main>
)

export default Challenges
