import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

import { Flex } from 'rebass'

const BenefitsNavWrapper = styled(Flex)`
  max-width: 400px;
  margin-left: auto;
  margin-right: auto;
  position: relative;
  border-radius: 500px;
  box-shadow: ${props => props.theme.shadows[2]};
  a {
    background-color: white;
    min-width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: ${props => props.theme.colors.g800};
    padding: 0.5rem;
    text-decoration: none;
    font-weight: 500;
    filter: grayscale(1);
    transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
    font-size: 14px;
    span {
      display: block;
      font-size: 2rem;
      text-align: center;
    }
  }
  a:first-child {
    border-radius: 500px 0 0 500px;
  }
  a:last-child {
    border-radius: 0 500px 500px 0;
  }
`

const BenefitsNav = props => (
  <BenefitsNavWrapper mb={4}>
    <NavLink
      to="/benefits/"
      exact
      activeStyle={{
        color: '#FF4722',
        filter: 'none',
        backgroundColor: '#FBEAE7',
        title: "I'm a hacker",
      }}
    >
      <span>👩‍💻</span> I'm a hacker
    </NavLink>
    <NavLink
      to="/benefits/challengers"
      exact
      activeStyle={{
        color: '#FF4722',
        filter: 'none',
        backgroundColor: '#FBEAE7',
        title: "I'm a challenge",
      }}
    >
      <span>👔</span> I'm a challenger
    </NavLink>
  </BenefitsNavWrapper>
)
export default BenefitsNav
