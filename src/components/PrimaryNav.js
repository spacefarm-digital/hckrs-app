import React from 'react'

import CleanLink from '../components/extended/CleanLink'

import { Fixed } from 'rebass'

import BottomNavigation, {
  BottomNavigationButton,
} from 'material-ui/BottomNavigation'
import HomeIcon from 'material-ui-icons/Home'
import NotificationsIcon from 'material-ui-icons/Notifications'
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
            label="Home"
            icon={<HomeIcon />}
            component={CleanLink}
            to="/"
          />
          <BottomNavigationButton
            label="Challenges"
            icon={<BusinessIcon />}
            component={CleanLink}
            to="/challenges"
          />
          <BottomNavigationButton
            label="Hackers"
            icon={<GroupIcon />}
            component={CleanLink}
            to="/hackers"
          />
          <BottomNavigationButton
            label="News"
            icon={<FiberNewIcon />}
            component={CleanLink}
            to="/news"
          />
          <BottomNavigationButton
            label="Activity"
            icon={<NotificationsIcon />}
            component={CleanLink}
            to="/activity"
          />
        </BottomNavigation>
      </Fixed>
    )
  }
}

export default PrimaryNav
