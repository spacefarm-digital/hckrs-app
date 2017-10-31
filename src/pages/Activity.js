import React, { Component } from 'react'

import { Flex, Box, Heading, Measure } from 'rebass'

import PageTitle from '../components/PageTitle'
import TypeIcon from '../components/extended/TypeIcon'
import Notification from '../components/Notification'

import NotificationsIcon from 'material-ui-icons/Notifications'
import DoneAllIcon from 'material-ui-icons/DoneAll'
import Button from 'material-ui/Button'

class Activity extends Component {
  render() {
    return (
      <Measure mx="auto" px={3}>
        <PageTitle title="Activity">
          <NotificationsIcon />
        </PageTitle>
        {/* Mark as read */}
        <Flex justify="flex-end" mb={3}>
          <Button raised>
            <TypeIcon margin=".5em">
              <DoneAllIcon />
            </TypeIcon>Mark all as read
          </Button>
        </Flex>
        {/* Unread */}
        <Box mb={3}>
          <Heading f={1} mb={2}>
            Unread (2)
          </Heading>
        </Box>
        <Flex mb={3} column>
          {[0, 1, 2].map(value => (
            <Box mb={2}>
              <Notification />
            </Box>
          ))}
        </Flex>
        {/* Read */}
        <Box mb={3}>
          <Heading f={1} mb={2}>
            Read
          </Heading>
        </Box>
      </Measure>
    )
  }
}
export default Activity
