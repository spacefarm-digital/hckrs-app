import React from 'react'
import PropTypes from 'prop-types'
import PrettyPaper from './extended/PrettyPaper'

import { Flex, Heading, Box } from 'rebass'

import MoneyPrize from './MoneyPrize'

const Prizes = props => (
  <Box mb={4}>
    <Heading is="h2" f={3} mb={2} color="pA400">
      Prizes
    </Heading>
    <MoneyPrize />
  </Box>
)
export default Prizes
