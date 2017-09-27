import React from 'react'
import styled from 'styled-components'
import placeholder from '../assets/placeholder-avatar.jpg'

import { Relative, Absolute } from 'rebass'

import BlockAvatar from '../components/extended/BlockAvatar'

import UploadOverlay from './UploadOverlay'

const ImageField = props => (
  <Relative>
    <BlockAvatar src={placeholder} size="6rem" />
    <UploadOverlay />
  </Relative>
)

export default ImageField
