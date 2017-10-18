import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import MediaQuery from 'react-responsive'
import styled from 'styled-components'

import { Flex, Heading, Fixed } from 'rebass'

import CleanLink from '../components/extended/CleanLink'
import FluidContainer from '../components/extended/FluidContainer'
import { NavLink } from 'react-router-dom'
import DesktopTab from '../components/extended/DesktopTab'
import ProfileMenu from '../components/ProfileMenu'

import AppBar from 'material-ui/AppBar'
import Toolbar from 'material-ui/Toolbar'
import BottomNavigation, {
  BottomNavigationButton,
} from 'material-ui/BottomNavigation'
import IconButton from 'material-ui/IconButton'
import Badge from 'material-ui/Badge'
import Button from 'material-ui/Button'

import HomeIcon from 'material-ui-icons/Home'
import NotificationsIcon from 'material-ui-icons/Notifications'
import BusinessIcon from 'material-ui-icons/Business'
import GroupIcon from 'material-ui-icons/Group'
import FiberNewIcon from 'material-ui-icons/FiberNew'
import AddCircleIcon from 'material-ui-icons/AddCircle'
import StarsIcon from 'material-ui-icons/Stars'

import Tabs from 'material-ui/Tabs'

// !!! Import theme
import { withTheme } from 'material-ui/styles'

const defaultProps = { title: 'Example title' }

const StyledNavLink = styled(NavLink)`min-width: 0 !important;`

class TitleBar extends Component {
  state = {
    loggedIn: false,
  }

  toggleLoggedin = (event, value) => {
    this.setState({
      loggedIn: event.target.checked,
    })
  }

  render() {
    const { value } = this.state
    // !!! Include theme
    const { theme } = this.props
    const primaryColor = theme.palette.primary[500]
    return (
      <div>
        <AppBar position="static">
          <input
            type="checkbox"
            onChange={this.toggleLoggedin}
            checked={this.state.isChecked}
            style={{ position: 'absolute', top: 0, right: 0 }}
          />
          <FluidContainer>
            <Flex w={1} justify="space-between" align="center" color="#fff">
              {this.state.loggedIn ? (
                <Heading
                  f={2}
                  is={CleanLink}
                  to="/"
                  onClick={this.goHome}
                  py={3}
                >
                  hckrs
                </Heading>
              ) : (
                <Heading
                  f={2}
                  is={CleanLink}
                  to="MHome"
                  onClick={this.goHome}
                  py={3}
                >
                  hckrs
                </Heading>
              )}
              <MediaQuery query="(min-width: 50em)">
                <Tabs
                  value={value}
                  component="nav"
                  showLabels
                  indicatorColor="#ffffff"
                  textColor="#fff"
                >
                  {this.state.loggedIn ? (
                    <DesktopTab
                      icon={<HomeIcon />}
                      label="Dashboard"
                      component={NavLink}
                      to="/"
                      exact
                      activeStyle={{ boxShadow: '0 -4px 0 0 white inset' }}
                    />
                  ) : null}
                  {this.state.loggedIn ? null : (
                    <DesktopTab
                      icon={<StarsIcon />}
                      label="Benefits"
                      component={NavLink}
                      to="/benefits"
                      activeStyle={{ boxShadow: '0 -4px 0 0 white inset' }}
                    />
                  )}
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
                  {/* Conditional rendering */}
                  {this.state.loggedIn ? (
                    <DesktopTab
                      icon={
                        <Badge badgeContent={3} color="accent">
                          <NotificationsIcon />
                        </Badge>
                      }
                      label="Activity"
                      component={NavLink}
                      to="/activity"
                      activeStyle={{ boxShadow: '0 -4px 0 0 white inset' }}
                    />
                  ) : null}
                </Tabs>
              </MediaQuery>
              {this.state.loggedIn ? (
                <Flex>
                  <IconButton component={Link} to="/new-challenge">
                    <AddCircleIcon color="#fff" />
                  </IconButton>
                  <ProfileMenu />
                </Flex>
              ) : (
                <Button color="contrast">Get started</Button>
              )}
            </Flex>
          </FluidContainer>
        </AppBar>
        <MediaQuery query="(max-width: 50em)">
          <Fixed bottom w={1} z={999} is="nav">
            <BottomNavigation value={value} showLabels component="nav">
              {this.state.loggedIn ? (
                <BottomNavigationButton
                  label="Dashboard"
                  icon={<HomeIcon />}
                  component={StyledNavLink}
                  to="/"
                  exact
                  activeStyle={{ color: primaryColor }}
                />
              ) : (
                <BottomNavigationButton
                  label="Benefits"
                  icon={<StarsIcon />}
                  component={StyledNavLink}
                  to="/benefits"
                  exact
                  activeStyle={{ color: primaryColor }}
                />
              )}
              <BottomNavigationButton
                label="Challenges"
                icon={<BusinessIcon />}
                component={StyledNavLink}
                to="/challenges"
                activeStyle={{ color: primaryColor }}
              />
              <BottomNavigationButton
                label="Hackers"
                icon={<GroupIcon />}
                component={StyledNavLink}
                to="/hackers"
                activeStyle={{ color: primaryColor }}
              />
              <BottomNavigationButton
                label="News"
                icon={<FiberNewIcon />}
                component={StyledNavLink}
                to="/news"
                activeStyle={{ color: primaryColor }}
              />
              {this.state.loggedIn ? (
                <BottomNavigationButton
                  label="Activity"
                  icon={<NotificationsIcon />}
                  component={StyledNavLink}
                  to="/activity"
                  activeStyle={{ color: primaryColor }}
                />
              ) : (
                <div />
              )}
            </BottomNavigation>
          </Fixed>
        </MediaQuery>
      </div>
    )
  }
}

TitleBar.defaultProps = defaultProps

// !!! Export with theme
export default withTheme(TitleBar)
