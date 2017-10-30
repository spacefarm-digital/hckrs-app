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
    > ${Box}:nth-child(1) {
      position: relative;
      top: 6px;
      left: 12px;
    }
    > ${Box}:nth-child(2) {
      position: relative;
      top: -6px;
      left: 5px;
    }
    > ${Box}:nth-child(3) {
      position: relative;
      top: 9px;
      left: 0px;
    }
    > ${Box}:nth-child(4) {
      position: relative;
      top: -10px;
      left: 8px;
    }
    > ${Box}:nth-child(5) {
      position: relative;
      top: 6px;
      left: 5px;
    }
    > ${Box}:nth-child(6) {
      position: relative;
      top: -9px;
      left: 0px;
    }
    > ${Box}:nth-child(7) {
      position: relative;
      top: 5px;
      left: -3px;
    }
    > ${Box}:nth-child(8) {
      position: relative;
      top: -8px;
      left: 10px;
    }
    > ${Box}:nth-child(9) {
      position: relative;
      top: -12px;
      left: 8px;
    }
    > ${Box}:nth-child(10) {
      position: relative;
      top: -0px;
      left: 0px;
    }
  }
  // Second row
  > ${Flex}:nth-child(2) {
    position: relative;
    > ${Box}:nth-child(1) {
      position: relative;
      top: 7px;
      left: 2px;
    }
    > ${Box}:nth-child(2) {
      position: relative;
      top: -3px;
      left: 0px;
    }
    > ${Box}:nth-child(3) {
      position: relative;
      top: 12px;
      left: 0px;
    }
    > ${Box}:nth-child(4) {
      position: relative;
      top: 0px;
      left: 4px;
    }
    > ${Box}:nth-child(5) {
      position: relative;
      top: 9px;
      left: 6px;
    }
    > ${Box}:nth-child(6) {
      position: relative;
      top: -7px;
      left: 8px;
    }
    > ${Box}:nth-child(7) {
      position: relative;
      top: 8px;
      left: 0px;
    }
    > ${Box}:nth-child(8) {
      position: relative;
      top: -10px;
      left: 0px;
    }
    > ${Box}:nth-child(9) {
      position: relative;
      top: -4px;
      left: 6px;
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
