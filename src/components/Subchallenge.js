import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import PrettyPaper from './extended/PrettyPaper'

import { Heading, Text, Flex } from 'rebass'

import Button from 'material-ui/Button'

const Subchallenge = props => (
  <PrettyPaper p={3} mb={3}>
    <Heading f={2} mb={2}>
      Subchallenge name
    </Heading>
    <Text>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea pariatur
      velit commodi laudantium facilis officiis quo ullam laborum sunt,
      perspiciatis quas tempora a atque, nemo dolor neque possimus, ducimus
      eum?.
    </Text>
    <Flex justify="flex-end">
      <Button component={Link} to="#" raised color="accent">
        Submit hack
      </Button>
    </Flex>
  </PrettyPaper>
)

export default Subchallenge
