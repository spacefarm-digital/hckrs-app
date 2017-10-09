// @flow weak

import React from 'react'
import PropTypes from 'prop-types'
import Card, { CardContent } from 'material-ui/Card'
import { Text, Heading, Flex, Box, Avatar } from 'rebass'

import Button from 'material-ui/Button'

import PrettyPaper from '../components/extended/PrettyPaper'
import PrettyLink from '../components/extended/PrettyLink'
import CleanLink from '../components/extended/CleanLink'
import CategoryPreview from '../components/CategoryPreview'

import placeholder from '../assets/placeholder-avatar.jpg'

const propTypes = {
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  categories: PropTypes.array,
}

const defaultProps = {
  name: 'Default name',
  avatar: placeholder,
}

const Advisor = props => {
  return (
    <PrettyPaper p={3}>
      <Flex mh={-2} w={1} mb={2}>
        <Box px={2}>
          <Avatar src={props.avatar} size="4rem" />
        </Box>
        <Box px={2} w={1}>
          <Heading f={2} is="h2" mb={3}>
            {props.name}
          </Heading>
        </Box>
      </Flex>
      <Text bold mb={2}>
        Knowledgable about:
      </Text>
      <Flex wrap w={1} is="ul" mx={-1} mb={3}>
        {props.categories.map((category, index) => (
          <Box is="li" px={1} mb={2}>
            <CleanLink to="/" key={index}>
              <CategoryPreview title={category} />
            </CleanLink>
          </Box>
        ))}
      </Flex>
      {/* Book timeslot */}
      <Flex justify="flex-end">
        <Button raised color="accent">
          Book timeslot
        </Button>
      </Flex>
    </PrettyPaper>
  )
}

Advisor.propTypes = propTypes
Advisor.defaultProps = defaultProps

export default Advisor
