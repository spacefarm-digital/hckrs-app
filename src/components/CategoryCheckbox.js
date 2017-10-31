import React from 'react'
import Emoji from './Emoji'
import Ink from 'react-ink'

import styled from 'styled-components'

import HiddenInput from './extended/HiddenInput'

import { Relative } from 'rebass'

import CategoryChip from './CategoryChip'

const CategoryLabel = CategoryChip.withComponent('label')

const handleChange = () => {
  this.state.checked
    ? this.setState({
        checked: false,
      })
    : this.setState({ checked: true })
}

const BWCategoryLabel = styled(CategoryLabel)`
  &:after {
    content: '';
    width: 100%;
    height: 100%;
    background-color: ${props => props.theme.colors.g200};
    position: absolute;
    top: 0;
    left: 0;
    border-radius: 32px;
    transition: all 250ms ease-out;
    pointer-events: none;
  }
  span {
    position: relative;
    z-index: 2;
    pointer-events: none;
    filter: grayscale(1);
    color: ${props => props.theme.colors.g600};
  }
`

const CategoryInput = styled(HiddenInput)`
  &:checked + label {
    &:after {
      opacity: 0;
    }
    span {
      filter: grayscale(0);
      color: inherit !important;
    }
  }
  &:focus + label:after {
    transform: scale(1.1);
  }
`

class CategoryCheckbox extends React.Component {
  render() {
    return (
      <Relative>
        <CategoryInput
          title={this.props.title}
          type="checkbox"
          id={this.props.name}
          onChange={this.handleChange}
          checked={this.onChange}
          ref={this.props.name}
        />
        <BWCategoryLabel
          htmlFor={this.props.name}
          title={this.props.title}
          color={(() => {
            switch (this.props.title) {
              case 'Aerospace':
                return '#E2D4FC'
              case 'Agriculture':
                return '#EBFCD7'
              case 'Chemical':
                return '#FFDED4'
              case 'Computer':
                return '#D9FFFF'
              case 'Construction':
                return '#D6F1FF'
              case 'Food & Drinks':
                return '#FFF5D1'
              case 'Education':
                return '#FFEAD1'
              case 'Energy':
                return '#D4FCEF'
              case 'Environment':
                return '#F2F0E6'
              case 'Health Care':
                return '#FCD7D7'
              case 'Finance':
                return '#D7FCDA'
              case 'Logistical':
                return '#FCD4EF'
              case 'Manifacturing':
                return '#FFFBD1'
              case 'Media':
                return '#EFD4FC'
              case 'Telecommunications':
                return '#D4E2FC'
              case 'Transport':
                return '#E6ECF2'
              default:
                return 'red'
            }
          })()}
        >
          <span>
            <Emoji>
              {(() => {
                switch (this.props.title) {
                  case 'Aerospace':
                    return '✈️'
                  case 'Agriculture':
                    return '🌽'
                  case 'Chemical':
                    return '⚗️'
                  case 'Computer':
                    return '💻'
                  case 'Construction':
                    return '🏗'
                  case 'Food & Drinks':
                    return '🍲'
                  case 'Education':
                    return '🎓'
                  case 'Energy':
                    return '⚡'
                  case 'Environment':
                    return '🏔'
                  case 'Health Care':
                    return '⚕'
                  case 'Finance':
                    return '💰'
                  case 'Logistical':
                    return '🚛'
                  case 'Manifacturing':
                    return '🏭'
                  case 'Media':
                    return '📰'
                  case 'Telecommunications':
                    return '📡'
                  case 'Transport':
                    return '🚍'
                  default:
                    return 'red'
                }
              })()}
            </Emoji>
            {this.props.title}
          </span>
          <Ink />
        </BWCategoryLabel>
      </Relative>
    )
  }
}
export default CategoryCheckbox
