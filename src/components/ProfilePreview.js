// @flow weak

import React from 'react'
import PropTypes from 'prop-types'
import Card, { CardContent } from 'material-ui/Card'
import { Text, Heading, Flex, Box, Avatar } from 'rebass'

import CategoryChip from '../components/CategoryChip'
import PrettyLink from '../components/extended/PrettyLink'

import placeholder from '../assets/placeholder-avatar.jpg'

const propTypes = {
  name: PropTypes.string.isRequired,
  numberOfHacks: PropTypes.number.isRequired,
  avatar: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  categories: PropTypes.arrayOf(PropTypes.string),
}

const defaultProps = {
  name: 'Default name',
  numberOfHacks: 0,
  avatar: placeholder,
  location: 'The world',
}

const ProfilePreview = props => {
  return (
    <Card>
      <CardContent>
        <Flex mh={-2} w={1}>
          <Box px={2}>
            <Avatar src={props.avatar} size="4rem" />
          </Box>
          <Box px={2} w={1}>
            <Heading f={2} is="h2" mb={2}>
              {props.name}
            </Heading>
            <Text mb={3}>
              <PrettyLink to="/" mb={3}>
                {props.numberOfHacks} submitted hacks
              </PrettyLink>, {'Located in'}{' '}
              <PrettyLink to="/">{props.location}</PrettyLink>
            </Text>
          </Box>
        </Flex>
        <Text bold mb={2}>
          Interested in: {props.categories}
        </Text>
        <Flex wrap w={1} is="ul" mx={-1} mb={-2}>
          <Box is="li" px={1} mb={2}>
            <CategoryChip color="#bcf5dd" to="/category">
              ✈️ Aviation
            </CategoryChip>
          </Box>
        </Flex>
      </CardContent>
    </Card>
  )
}

ProfilePreview.propTypes = propTypes
ProfilePreview.defaultProps = defaultProps

export default ProfilePreview
