import React, { Component } from 'react'
import PropTypes from 'prop-types'
import MediaQuery from 'react-responsive'
import styled from 'styled-components'

import { Flex, Heading, Fixed } from 'rebass'

import CleanLink from '../components/extended/CleanLink'
import { NavLink } from 'react-router-dom'
import DesktopTab from '../components/extended/DesktopTab'
import ProfileMenu from '../components/ProfileMenu'

import AppBar from 'material-ui/AppBar'
import Toolbar from 'material-ui/Toolbar'
import BottomNavigation, {
  BottomNavigationButton,
} from 'material-ui/BottomNavigation'
import HomeIcon from 'material-ui-icons/Home'
import NotificationsIcon from 'material-ui-icons/Notifications'
import BusinessIcon from 'material-ui-icons/Business'
import GroupIcon from 'material-ui-icons/Group'
import FiberNewIcon from 'material-ui-icons/FiberNew'

import Tabs from 'material-ui/Tabs'

const defaultProps = { title: 'Example title' }

const StyledNavLink = styled(NavLink)`min-width: 0 !important;`

class TitleBar extends Component {
  state = {
    value: null,
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
                  component="nav"
                  showLabels
                  indicatorColor="#ffffff"
                  textColor="#fff"
                >
                  <DesktopTab
                    icon={<HomeIcon />}
                    label="Home"
                    component={NavLink}
                    to="/"
                    exact
                    activeStyle={{ boxShadow: '0 -4px 0 0 white inset' }}
                  />
                  <DesktopTab
                    icon={<BusinessIcon />}
                    label="Challenges"
                    component={NavLink}
                    to="/challenges"
                    activeStyle={{ boxShadow: '0 -4px 0 0 white inset' }}
                  />
                  <DesktopTab
                    icon={<GroupIcon />}
                    label="Hackers"
                    component={NavLink}
                    to="/hackers"
                    activeStyle={{ boxShadow: '0 -4px 0 0 white inset' }}
                  />
                  <DesktopTab
                    icon={<FiberNewIcon />}
                    label="News"
                    component={NavLink}
                    to="/news"
                    activeStyle={{ boxShadow: '0 -4px 0 0 white inset' }}
                  />
                  <DesktopTab
                    icon={<NotificationsIcon />}
                    label="Activity"
                    component={NavLink}
                    to="/activity"
                    activeStyle={{ boxShadow: '0 -4px 0 0 white inset' }}
                  />
                </Tabs>
              </MediaQuery>
              <ProfileMenu />
            </Flex>
          </Toolbar>
        </AppBar>
        <MediaQuery query="(max-width: 50em)">
          <Fixed bottom w={1} z={999} is="nav">
            <BottomNavigation value={value} showLabels component="nav">
              <BottomNavigationButton
                label="Home"
                icon={<HomeIcon />}
                component={StyledNavLink}
                to="/"
                exact
                activeStyle={{ color: 'orange' }}
              />
              <BottomNavigationButton
                label="Challenges"
                icon={<BusinessIcon />}
                component={StyledNavLink}
                to="/challenges"
                activeStyle={{ color: 'orange' }}
              />
              <BottomNavigationButton
                label="Hackers"
                icon={<GroupIcon />}
                component={StyledNavLink}
                to="/hackers"
                activeStyle={{ color: 'orange' }}
              />
              <BottomNavigationButton
                label="News"
                icon={<FiberNewIcon />}
                component={StyledNavLink}
                to="/news"
                activeStyle={{ color: 'orange' }}
              />
              <BottomNavigationButton
                label="Activity"
                icon={<NotificationsIcon />}
                component={StyledNavLink}
                to="/activity"
                activeStyle={{ color: 'orange' }}
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
