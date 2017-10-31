import React from 'react'
import placeholder from '../assets/placeholder.jpg'

import { Relative } from 'rebass'

import BlockAvatar from '../components/extended/BlockAvatar'

import UploadOverlay from './UploadOverlay'

class ImageField extends React.Component {
  render() {
    return (
      <Relative>
        <BlockAvatar src={placeholder} size="6rem" />
        <UploadOverlay name={this.props.name} />
      </Relative>
    )
  }
}

export default ImageField
