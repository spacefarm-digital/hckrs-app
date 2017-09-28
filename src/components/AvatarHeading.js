import React from 'react'
import PropTypes from 'prop-types'

import { Flex, Heading, Image } from 'rebass'

import placeholder from '../assets/placeholder.jpg'

const propTypes = {
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  level: PropTypes.string,
}

const defaultProps = {
  name: 'Challenge Name',
  avatar: placeholder,
  level: 'h2',
}

const AvatarHeading = props => (
  <Flex align="center" mb={2}>
    <Image src={props.avatar} mr=".5em" w="2em" />
    <Heading is={props.level} f={2}>
      {props.name}
    </Heading>
  </Flex>
)

AvatarHeading.propTypes = propTypes
AvatarHeading.defaultProps = defaultProps

export default AvatarHeading
