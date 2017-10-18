import React from 'react'
import { NavLink } from 'react-router-dom'

import { Flex } from 'rebass'

const BenefitsNav = props => (
  <Flex justify="center">
    <NavLink to="/benefits/" exact activeStyle={{ color: 'red' }}>
      I'm a hacker
    </NavLink>
    <NavLink to="/benefits/challengers" exact activeStyle={{ color: 'red' }}>
      I'm a challenger
    </NavLink>
  </Flex>
)
export default BenefitsNav
