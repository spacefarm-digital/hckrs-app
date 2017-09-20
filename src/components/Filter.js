import React from 'react'

import { Flex, Box, Text, Container } from 'rebass'

import Paper from 'material-ui/Paper'

import FilterItem from './FilterItem'
import Search from './Search'

const Filter = () => (
  <Paper color="primary">
    <Container mb={4} mx="auto">
      <Flex wrap align="baseline" justify="space-between" f={1} py={2} mx={-2}>
        <Flex align="baseline">
          <Text px={2} bold>
            Showing
          </Text>
          <Box py={2} px={2}>
            <FilterItem />
          </Box>
          <Text px={2} bold>
            events happening
          </Text>
          <Box py={2} px={2}>
            <FilterItem />
          </Box>
          <Text px={2} bold>
            in
          </Text>
          <Box py={2} px={2}>
            <FilterItem />
          </Box>
        </Flex>
        <Box>
          <Search />
        </Box>
      </Flex>
    </Container>
  </Paper>
)
export default Filter
