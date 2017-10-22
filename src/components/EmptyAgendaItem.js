import React from 'react'
import { ListItem, ListItemText } from 'material-ui/List'
import PrettyPaper from './extended/PrettyPaper'

import { Flex, Heading, Box, Text } from 'rebass'

import NameField from './extended/NameField'

import Button from 'material-ui/Button'

const EmptyAgendaItem = props => (
  <div>
    <Flex mx={-2} mb={3} is="form">
      <Box px={2} w={['6em', '6.5em', '7em']} f={[1, 2, 3]}>
        <NameField defaultValue="07:30" type="time" fullWidth />
      </Box>
      <Box px={2} w={1}>
        <Box mb={2}>
          <NameField f={[1, 2, 3]} fullWidth placeholder="Title" />
        </Box>
        <NameField fullWidth multiline label="Description (optional)" />
      </Box>
    </Flex>
    {/* Remove disabled when the form */}
    <Flex justify="flex-end">
      <Button color="accent" raised disabled>
        Done
      </Button>
    </Flex>
  </div>
)

export default EmptyAgendaItem
