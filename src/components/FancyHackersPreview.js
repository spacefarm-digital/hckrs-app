import React from 'react'
import styled from 'styled-components'
import ProfilePreview from '../components/ProfilePreview'

import { Flex, Box, Heading } from 'rebass'

// Data
import FeaturedHackers from '../data/featuredHackers'

const secondHalf = FeaturedHackers.splice(
  0,
  Math.ceil(FeaturedHackers.length / 2 - 1),
)

const ExplodedLayout = styled(Box)`
  position: relative;
  width: 100vw;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 1rem;
  margin-bottom: 2rem;
  overflow: hidden;
  padding: 2rem 0;
  &:after {
    content: '';
    display: block;
    width: 100vw;
    height: 80%;
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    background-color: ${props => props.theme.colors.s100};
    z-index: 1;
  }
  > ${Flex} {
    z-index: 2;
  }
  // First row
  > ${Flex}:nth-child(1) {
    position: relative;
    // Example child
    > ${Box}:nth-child(7) {
      position: relative;
      // Max nudge distance is 12px
      top: -12px;
      left: 10px;
    }
  }
  // Second row
  > ${Flex}:nth-child(2) {
    position: relative;
    transform: translateX(125px);
    > ${Box}:nth-child(7) {
      position: relative;
      top: 12px;
      left: -8px;
    }
  }
`

const FancyHackersPreview = props => (
  <ExplodedLayout>
    <Flex mb={4}>
      {FeaturedHackers.map((hacker, value) => (
        <Box w={250} px={3}>
          <ProfilePreview
            compact
            name={hacker.name}
            avatar={hacker.avatar}
            categories={['Aerospace', 'Telecommunications']}
          />
        </Box>
      ))}
    </Flex>
    <Flex>
      {secondHalf.map((hacker, value) => (
        <Box w={250} px={3}>
          <ProfilePreview
            compact
            name={hacker.name}
            avatar={hacker.avatar}
            categories={['Aerospace', 'Chemical', 'Transport']}
          />
        </Box>
      ))}
    </Flex>
  </ExplodedLayout>
)

export default FancyHackersPreview
