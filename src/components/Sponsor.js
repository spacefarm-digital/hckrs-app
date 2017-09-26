import React from 'react'
import PropTypes from 'prop-types'
import Ink from 'react-ink'

import PrettyPaper from './extended/PrettyPaper'
import CleanA from './extended/CleanA'

import placeholder from '../assets/placeholder.jpg'

import { BackgroundImage, Text, Box } from 'rebass'

const propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  externalUrl: PropTypes.string,
}

const defaultProps = {
  name: 'Sponsor McSponsor',
  image: placeholder,
}

const Sponsor = props => {
  if (props.externalUrl) {
    return (
      <PrettyPaper component={CleanA} href={props.externalUrl} target="_blank">
        <BackgroundImage src={props.image} ratio={1} />
        <Box px={3} py={2} center>
          <Text bold>{props.name}</Text>
        </Box>
        <Ink />
      </PrettyPaper>
    )
  }
  return (
    <PrettyPaper>
      <BackgroundImage src={props.image} ratio={1} />
      <Box px={3} py={2} center>
        <Text bold>{props.name}</Text>
      </Box>
    </PrettyPaper>
  )
}

Sponsor.propTypes = propTypes
Sponsor.defaultProps = defaultProps

export default Sponsor
