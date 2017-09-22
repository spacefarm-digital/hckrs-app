import React from 'react'
import PropTypes from 'prop-types'
import { Heading, Container } from 'rebass'
import TypeIcon from '../components/extended/TypeIcon'

const propTypes = {
  title: PropTypes.string.isRequired,
}

const defaultProps = {
  title: 'Page title',
}

const PageTitle = props => (
  <Container mx="auto">
    <Heading f={[3, 4]} is="h1" pt={4} mb={2}>
      <TypeIcon>{props.children}</TypeIcon>
      {props.title}
    </Heading>
  </Container>
)

PageTitle.PropTypes = propTypes
PageTitle.defaultProps = defaultProps

export default PageTitle
