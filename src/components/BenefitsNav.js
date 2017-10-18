import React from 'react'
import { NavLink } from 'react-router-dom'

import { Flex } from 'rebass'

const BenefitsNav = props => (
  <Flex justify="center">
    <NavLink to="benefits#hackers">I'm a hacker</NavLink>
    <NavLink to="benefits#challengers">I'm a challenger</NavLink>
  </Flex>
)
export default BenefitsNav
