import React from 'react'

import { Container, Flex, Box, Text, Heading } from 'rebass'

import Paper from 'material-ui/Paper'

import FilterItem from './FilterItem'

const Filter = () => (
  <Paper component={Box} px={3} mb={4} color="primary">
    <Flex wrap align="baseline" f={1} py={2} mx={-2} px={2}>
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
  </Paper>
)
export default Filter
