import React from 'react'
import styled from 'styled-components'

import { Relative, Absolute, Avatar } from 'rebass'

import placeholder from '../assets/placeholder-avatar.jpg'

const ProfileWithTeams = () => (
  <Relative>
    <Avatar src={placeholder} size="4rem" />
    <Absolute bottom right mb={-1} mr={-1}>
      <Avatar src={placeholder} size="2rem" />
    </Absolute>
  </Relative>
)
export default ProfileWithTeams
