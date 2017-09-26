import React from 'react'

import { Flex, Box, Text, Container } from 'rebass'

import Paper from 'material-ui/Paper'

import FilterItem from './FilterItem'
import Search from './Search'
import CategoryFilter from './CategoryFilter'

const NewsFilter = () => (
  <Paper color="primary">
    <Container mb={4} mx="auto">
      <Flex wrap align="baseline" justify="space-between" f={1} py={2} mx={-2}>
        <Flex align="baseline" w={[1, 1, 'auto']} wrap mb={[3, 3, 0]}>
          <Text px={2} bold>
            News from
          </Text>
          <Box py={2} px={2}>
            <CategoryFilter />
          </Box>
        </Flex>
        <Box px={2} w={[1, 1, '300px', '500px']} mb={[3, 3, 0]}>
          <Search />
        </Box>
      </Flex>
    </Container>
  </Paper>
)
export default NewsFilter
