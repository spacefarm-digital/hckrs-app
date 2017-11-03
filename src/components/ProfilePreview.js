import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { Text, Heading, Flex, Box, Avatar } from 'rebass'

import CategoryPreview from '../components/CategoryPreview'
import PrettyPaper from '../components/extended/PrettyPaper'
import CleanLink from '../components/extended/CleanLink'
import PrettyLink from '../components/extended/PrettyLink'

import placeholder from '../assets/placeholder-avatar.jpg'

const propTypes = {
  name: PropTypes.string.isRequired,
  numberOfHacks: PropTypes.number.isRequired,
  avatar: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  categories: PropTypes.arrayOf(PropTypes.string),
  url: PropTypes.string,
}

const defaultProps = {
  name: 'Default name',
  numberOfHacks: 0,
  avatar: placeholder,
  location: 'The world',
  categories: ['Aerospace'],
  url: '/profile',
}

const ProfilePreview = props => {
  if (props.compact) {
    return (
      <PrettyPaper p={3}>
        <Flex column align="center">
          <Box mb={2}>
            <Avatar src={props.avatar} size="8rem" />
          </Box>
          <Heading f={1} is="p" mb={2}>
            {props.name}
          </Heading>
          <Flex wrap w={1} is="ul" mx={-1} mb={-2} justify="center">
            {props.categories.map((category, value) => (
              <Box is="li" px={1} mb={2}>
                <CategoryPreview title={category} to={category} compact />
              </Box>
            ))}
          </Flex>
        </Flex>
      </PrettyPaper>
    )
  }
  return (
    <PrettyPaper p={3}>
      <Flex mh={-2} w={1}>
        <Box px={2}>
          <CleanLink to={props.url}>
            <Avatar src={props.avatar} size="4rem" />
          </CleanLink>
        </Box>
        <Box px={2} w={1}>
          <CleanLink to={props.url}>
            <Heading f={2} is="p" mb={2} aria-label="Hacker name">
              {props.name}
            </Heading>
          </CleanLink>
          <Text mb={3}>
            {/* Link to the hacker's profile */}
            <PrettyLink to={props.url} mb={3}>
              {props.numberOfHacks} submitted hacks
            </PrettyLink>, {'Located in'}{' '}
            <PrettyLink to={props.location}>{props.location}</PrettyLink>
          </Text>
        </Box>
      </Flex>
      <Text bold mb={2}>
        Interested in: {props.categories}
      </Text>
      <Flex wrap w={1} is="ul" mx={-1} mb={-2}>
        {props.categories.map((category, value) => (
          <Box is="li" px={1} mb={2}>
            <CategoryPreview title={category} to={category} />
          </Box>
        ))}
      </Flex>
    </PrettyPaper>
  )
}

ProfilePreview.propTypes = propTypes
ProfilePreview.defaultProps = defaultProps

export default ProfilePreview
