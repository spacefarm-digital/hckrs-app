import React from 'react'
import { Flex, Box } from 'rebass'

import Button from 'material-ui/Button'

import PrettyPaper from '../components/extended/PrettyPaper'
import AdvisorsAutosuggest from '../components/AdvisorsAutosuggest'

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
