// @flow weak

import React from 'react'
import PropTypes from 'prop-types'
import Card, { CardContent } from 'material-ui/Card'
import { Text, Flex, Box } from 'rebass'

import Button from 'material-ui/Button'

import PrettyPaper from '../components/extended/PrettyPaper'
import PrettyLink from '../components/extended/PrettyLink'
import CleanLink from '../components/extended/CleanLink'
import CategoryPreview from '../components/CategoryPreview'
import AdvisorsAutosuggest from '../components/AdvisorsAutosuggest'
import { withStyles } from 'material-ui/styles'

import placeholder from '../assets/placeholder-avatar.jpg'

const EmptyAdvisor = props => {
  return (
    <PrettyPaper p={3} style={{ height: '100%' }}>
      <Flex column justify="center" align="center" style={{ height: '100%' }}>
        {/* This is just a demo with some built-in fake state */}
        <Box mb={3} w={1}>
          <AdvisorsAutosuggest />
        </Box>
        <Flex justify="center">
          <Button raised color="accent">
            Invite
          </Button>
        </Flex>
      </Flex>
    </PrettyPaper>
  )
}

export default EmptyAdvisor
