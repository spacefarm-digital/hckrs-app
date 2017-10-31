import React from 'react'
import PropTypes from 'prop-types'
import Emoji from '../components/Emoji'

const propTypes = {
  status: PropTypes.oneOf(['Active', 'Upcoming', 'Past']),
}

const defaultProps = {
  status: 'Active',
}

const Status = props => (
  <span>
    <Emoji accessibleName={props.status}>
      {(() => {
        switch (props.status) {
          case 'Active':
            return '✅'
          case 'Upcoming':
            return '⏳'
          case 'Past':
            return '⌛️'
          default:
            return '❓'
        }
      })()}
    </Emoji>
    {props.status}
  </span>
)
Status.propTypes = propTypes
Status.defaultProps = defaultProps
export default Status
