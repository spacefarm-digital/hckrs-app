import React from 'react'
import { Heading, Container } from 'rebass'
import TypeIcon from '../components/extended/TypeIcon'

const PageTitle = () => (
  <Container mx="auto">
    <Heading f={[3, 4]} is="h1" pt={4} mb={2}>
      <TypeIcon />
      Challenges
    </Heading>
  </Container>
)

export default PageTitle
