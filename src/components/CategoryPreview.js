import React from 'react'
import CategoryChip from './CategoryChip'
import Emoji from './Emoji'
import Ink from 'react-ink'

const CategoryPreview = props => (
  <CategoryChip
    color={(() => {
      switch (props.title) {
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
          switch (props.title) {
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
      {props.title}
    </span>
    <Ink background />
  </CategoryChip>
)
export default CategoryPreview
