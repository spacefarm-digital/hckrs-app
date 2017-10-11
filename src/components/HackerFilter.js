import React from 'react'

import { Flex, Box, Text } from 'rebass'

import Paper from 'material-ui/Paper'

import FilterItem from './FilterItem'
import Search from './Search'
import CategoryFilter from './CategoryFilter'

import FluidContainer from './extended/FluidContainer'

const HackerFilter = () => (
  <Paper color="primary">
    <FluidContainer mb={4} mx="auto">
      <Flex wrap align="baseline" justify="space-between" f={1} py={2} mx={-2}>
        <Flex align="baseline" w={[1, 1, 'auto']} wrap mb={[3, 3, 0]}>
          <Text px={2} bold>
            Showing
          </Text>
          <Box py={2} px={2}>
            <FilterItem
              options={[
                'All hackers',
                '✅ Recently Active',
                '😎 Rockstars',
                '👶 Rising talent',
              ]}
            />
          </Box>
          <Text px={2} bold>
            located
          </Text>
          <Box py={2} px={2}>
            <FilterItem
              options={['🗺 50km away', '🗺 100km away', '🗺 500km away']}
            />
          </Box>
          <Text px={2} bold>
            interested in
          </Text>
          <Box py={2} px={2}>
            <CategoryFilter />
          </Box>
        </Flex>
        <Box px={2} w={[1, 1, '200px', '300px']} mb={[3, 3, 0]}>
          <Search />
        </Box>
      </Flex>
    </FluidContainer>
  </Paper>
)
export default HackerFilter
