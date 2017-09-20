import React, { Component } from 'react'
import PropTypes from 'prop-types'
import MediaQuery from 'react-responsive'

import { Flex, Box, Text, Heading, Fixed } from 'rebass'

import CleanLink from '../components/extended/CleanLink'
import DesktopTab from '../components/extended/DesktopTab'

import AppBar from 'material-ui/AppBar'
import Toolbar from 'material-ui/Toolbar'
import Button from 'material-ui/Button'
import Icon from 'material-ui/Icon'
import IconButton from 'material-ui/IconButton'
import AccountCircleIcon from 'material-ui-icons/AccountCircle'

import BottomNavigation, {
  BottomNavigationButton,
} from 'material-ui/BottomNavigation'
import HomeIcon from 'material-ui-icons/Home'
import NotificationsIcon from 'material-ui-icons/Notifications'
import BusinessIcon from 'material-ui-icons/Business'
import GroupIcon from 'material-ui-icons/Group'
import FiberNewIcon from 'material-ui-icons/FiberNew'

import Tabs, { Tab } from 'material-ui/Tabs'
import PhoneIcon from 'material-ui-icons/Phone'
import FavoriteIcon from 'material-ui-icons/Favorite'
import PersonPinIcon from 'material-ui-icons/PersonPin'

const defaultProps = { title: 'Example title' }

class TitleBar extends Component {
  state = {
    value: 0,
  }

  handleChange = (event, value) => {
    this.setState({ value })
  }

  render() {
    const { value } = this.state
    return (
      <div>
        <AppBar position="static">
          <Toolbar>
            <Flex w={1} justify="space-between" align="center" color="#fff">
              <Heading f={2} is={CleanLink} to="/" onClick={this.goHome}>
                Hckrs
              </Heading>
              <MediaQuery query="(min-width: 50em)">
                <Tabs
                  value={value}
                  onChange={this.handleChange}
                  showLabels
                  indicatorColor="#ffffff"
                  textColor="#fff"
                >
                  <DesktopTab
                    icon={<HomeIcon />}
                    label="Home"
                    component={CleanLink}
                    to="/"
                  />
                  <DesktopTab
                    icon={<BusinessIcon />}
                    label="Challenges"
                    component={CleanLink}
                    to="/challenges"
                  />
                  <DesktopTab
                    icon={<GroupIcon />}
                    label="Hackers"
                    component={CleanLink}
                    to="/hackers"
                  />
                  <DesktopTab
                    icon={<FiberNewIcon />}
                    label="News"
                    component={CleanLink}
                    to="/news"
                  />
                  <DesktopTab
                    icon={<NotificationsIcon />}
                    label="Activity"
                    component={CleanLink}
                    to="/activity"
                  />
                </Tabs>
              </MediaQuery>
              <IconButton
                aria-label="Profile"
                component={CleanLink}
                to="/profile"
              >
                <AccountCircleIcon color="#ffffff" />
              </IconButton>
            </Flex>
          </Toolbar>
        </AppBar>
        <MediaQuery query="(max-width: 50em)">
          <Fixed bottom w={1} z={999} is="nav">
            <BottomNavigation
              value={value}
              onChange={this.handleChange}
              showLabels
            >
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
        </MediaQuery>
      </div>
    )
  }
}

TitleBar.defaultProps = defaultProps

export default TitleBar
