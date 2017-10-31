import React from 'react'
import styled from 'styled-components'

import { Flex, Box, Text } from 'rebass'

import Button from 'material-ui/Button'
import Icon from 'material-ui/Icon'
import AddCircleIcon from 'material-ui-icons/AddCircle'

const NewBlockButton = styled(Button)`
  width: 100% !important;
  height: 100% !important;
  border: 2px dashed ${props => props.theme.colors.g300}!important;
`

const NewBlock = props => (
  <Box
    p={3}
    style={props.tall ? { height: '100%', minHeight: '180px' } : null}
    bg="white"
  >
    <NewBlockButton color="primary" disabled={props.disabled}>
      <Flex align="center">
        <Box mr={2}>
          <Icon>
            <AddCircleIcon color="primary" />
          </Icon>
        </Box>
        <Text bold is="span">
          {props.children}
        </Text>
      </Flex>
    </NewBlockButton>
  </Box>
)

export default NewBlock
