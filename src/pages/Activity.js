/* eslint-disable flowtype/require-valid-file-annotation */

import React, { Component } from 'react'

import { Container, Flex, Box, Heading, Text, Measure } from 'rebass'

import PageTitle from '../components/PageTitle'
import TypeIcon from '../components/extended/TypeIcon'
import Notification from '../components/Notification'

import NotificationsIcon from 'material-ui-icons/Notifications'
import DoneAllIcon from 'material-ui-icons/DoneAll'
import Card, { CardContent } from 'material-ui/Card'
import Button from 'material-ui/Button'

class Activity extends Component {
  render() {
    return (
      <Measure mx="auto">
        <PageTitle title="Activity">
          <NotificationsIcon />
        </PageTitle>
        <Container pt={2} is="main">
          {/* Mark as read */}
          <Flex justify="flex-end" mb={3}>
            <Button raised>
              <TypeIcon margin=".5em">
                <DoneAllIcon />
              </TypeIcon>Mark all as read
            </Button>
          </Flex>
          {/* Divider */}
          <Box mb={3}>
            <Heading f={1} mb={2}>
              Unread (2)
            </Heading>
          </Box>
          <Flex mb={3} column>
            <Box mb={2}>
              <Notification />
            </Box>
            <Box mb={2}>
              <Notification />
            </Box>
          </Flex>
          <Box mb={3}>
            <Heading f={1} mb={2}>
              Read
            </Heading>
          </Box>
        </Container>
      </Measure>
    )
  }
}
export default Activity
