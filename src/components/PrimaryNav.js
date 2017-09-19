import React, { PropTypes } from 'react'

import CleanLink from '../components/extended/CleanLink'

import { Fixed } from 'rebass'

import BottomNavigation, {
  BottomNavigationButton,
} from 'material-ui/BottomNavigation'
import RestoreIcon from 'material-ui-icons/Restore'
import BusinessIcon from 'material-ui-icons/Business'
import GroupIcon from 'material-ui-icons/Group'
import FiberNewIcon from 'material-ui-icons/FiberNew'

class PrimaryNav extends React.Component {
  state = {
    value: 0,
  }

  handleChange = (event, value) => {
    this.setState({ value })
  }

  render() {
    const { value } = this.state

    return (
      <Fixed bottom w={1} is="nav">
        <BottomNavigation value={value} onChange={this.handleChange} showLabels>
          <BottomNavigationButton
            label="Benefits"
            icon={<RestoreIcon />}
            component={CleanLink}
            to="/"
          />
          <BottomNavigationButton
            label="Challenges"
            icon={<BusinessIcon />}
            component={CleanLink}
            to="/"
          />
          <BottomNavigationButton
            label="Hackers"
            icon={<GroupIcon />}
            component={CleanLink}
            to="/"
          />
          <BottomNavigationButton
            label="News"
            icon={<FiberNewIcon />}
            component={CleanLink}
            to="/"
          />
        </BottomNavigation>
      </Fixed>
    )
  }
}

export default PrimaryNav
