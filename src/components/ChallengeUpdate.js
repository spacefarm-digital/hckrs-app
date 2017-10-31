import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import { Flex, Box } from 'rebass'

import PrettyPaper from './extended/PrettyPaper'
import BlockLink from './extended/BlockLink'
import AvatarHeading from './AvatarHeading'
import Status from './Status'

import Button from 'material-ui/Button'

const propTypes = {
  name: PropTypes.string.isRequired,
  updates: PropTypes.arrayOf(PropTypes.string).isRequired,
  status: PropTypes.oneOf(['Active', 'Upcoming', 'Past']).isRequired,
}

const defaultProps = {
  name: 'Challenge name',
  updates: ['Update 1', 'Update 2', 'Update 3'],
  status: 'Active',
}

const ChallengeUpdate = props => (
  <PrettyPaper>
    {/* Status */}
    <Box px={3} pt={3}>
      <Flex justify="flex-end" mb={2}>
        <Status status={props.status} />
      </Flex>
      {/* Avatar + name */}
      <AvatarHeading name={props.name} avatar={props.avatar} />
    </Box>
    {/* Cycle over updates in array */}
    <Box is="ul" mb={2}>
      {props.updates.map(update => (
        <li>
          <BlockLink to="#" component={Link}>
            {update}
          </BlockLink>
        </li>
      ))}
    </Box>
    <Flex justify="center" px={3} pb={3}>
      <Button raised color="primary">
        See more
      </Button>
    </Flex>
  </PrettyPaper>
)

ChallengeUpdate.propTypes = propTypes
ChallengeUpdate.defaultProps = defaultProps

export default ChallengeUpdate
