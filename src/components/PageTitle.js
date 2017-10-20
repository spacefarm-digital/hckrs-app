import React from 'react'
import PropTypes from 'prop-types'
import { Heading } from 'rebass'
import TypeIcon from '../components/extended/TypeIcon'

const propTypes = {
  title: PropTypes.string.isRequired,
}

const defaultProps = {
  title: 'Page title',
}

const PageTitle = props => (
  <Heading f={[3, 4]} is="h1" pt={4} mb={3}>
    <TypeIcon primary>{props.children}</TypeIcon>
    {props.title}
  </Heading>
)

PageTitle.PropTypes = propTypes
PageTitle.defaultProps = defaultProps

export default PageTitle
