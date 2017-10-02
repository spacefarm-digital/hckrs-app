import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import PaperLink from '../components/extended/PaperLink'
import PrettyPaper from '../components/extended/PrettyPaper'
import Emoji from '../components/Emoji'

import { Flex, Box, Heading, Text } from 'rebass'

import Paper from 'material-ui/Paper'
import Icon from 'material-ui/Icon'
import KeyboardArrowRightIcon from 'material-ui-icons/KeyboardArrowRight'

const propTypes = {
  link: PropTypes.string.isRequired,
  emoji: PropTypes.string,
  accessibleName: PropTypes.string,
  title: PropTypes.string.isRequired,
  text: PropTypes.string,
}

const defaultProps = {
  link: '#',
  emoji: '🎉',
  accessibleName: 'Party Popper',
  title: 'Activity title',
  text: 'A short description or excerpt text for this notificaiton...',
}
const Notification = props => (
  <PrettyPaper>
    <PaperLink component={Link} to={props.link}>
      <Flex justify="space-between" align="center" w={1}>
        <Box>
          <Heading f={2} mb={1}>
            <Emoji accessibleName={props.accessibleName}>{props.emoji}</Emoji>
            {props.title}
          </Heading>
          <Text>{props.text}</Text>
        </Box>
        <Box>
          <Icon>
            <KeyboardArrowRightIcon />
          </Icon>
        </Box>
      </Flex>
    </PaperLink>
  </PrettyPaper>
)
Notification.PropTypes = propTypes
Notification.defaultProps = defaultProps
export default Notification
