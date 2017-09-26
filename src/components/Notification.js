import React, { Component } from 'react'
import CleanLink from '../components/extended/CleanLink'
import Emoji from '../components/Emoji'

import { Flex, Box, Heading, Text } from 'rebass'

import Paper from 'material-ui/Paper'
import Icon from 'material-ui/Icon'
import KeyboardArrowRightIcon from 'material-ui-icons/KeyboardArrowRight'

const Notification = () => (
  <Paper>
    <Flex
      justify="space-between"
      align="center"
      p={3}
      component={CleanLink}
      to="/"
      w={1}
    >
      <Box>
        <Heading f={2} mb={1}>
          <Emoji accessibleName="Party Popper">🎉</Emoji>
          Activity title
        </Heading>
        <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit...</Text>
      </Box>
      <Box>
        <Icon>
          <KeyboardArrowRightIcon />
        </Icon>
      </Box>
    </Flex>
  </Paper>
)
export default Notification
