import React from 'react'
import styled from 'styled-components'

import Ink from 'react-ink'

const UploadOverlayWrapper = styled.form`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: rgba(255, 0, 0, 0.5);
  display: block;
  color: white;
  border-radius: 50%;
  font-weight: 500;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  display: block;
  padding: 0.5rem;
  text-align: center;
  transition: all 250ms ease-out;
  &:hover {
    opacity: .9;
  }
  input {
    position: absolute !important;
    clip: rect(1px 1px 1px 1px) !important;
    clip: rect(1px, 1px, 1px, 1px) !important;
    left: 0;
    &:focus + label {
      background-color: rgba(255, 255, 255, .25);
    }
  }
  label {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    border-radius: 500px;
    transition: all 250ms ease-out;
`
const UploadOverlay = props => (
  <UploadOverlayWrapper>
    <input type="file" id={props.name} />
    <label htmlFor={props.name}>
      <span>Upload photo</span>
      <Ink />
    </label>
  </UploadOverlayWrapper>
)

export default UploadOverlay
