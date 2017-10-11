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

import HomeIcon from 'material-ui-icons/Home'
import NotificationsIcon from 'material-ui-icons/Notifications'
import BusinessIcon from 'material-ui-icons/Business'
import GroupIcon from 'material-ui-icons/Group'
import FiberNewIcon from 'material-ui-icons/FiberNew'
import AddCircleIcon from 'material-ui-icons/AddCircle'

import Tabs from 'material-ui/Tabs'

// !!! Import theme
import { withTheme } from 'material-ui/styles'

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
    // !!! Include theme
    const { theme } = this.props
    const primaryColor = theme.palette.primary[500]
    return (
      <div>
        <AppBar position="static">
          <FluidContainer>
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
                </Tabs>
              </MediaQuery>
              <Flex>
                <IconButton component={Link} to="/new-challenge">
                  <AddCircleIcon color="#fff" />
                </IconButton>
                <ProfileMenu />
              </Flex>
            </Flex>
          </FluidContainer>
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
                activeStyle={{ color: primaryColor }}
              />
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
              <BottomNavigationButton
                label="Activity"
                icon={<NotificationsIcon />}
                component={StyledNavLink}
                to="/activity"
                activeStyle={{ color: primaryColor }}
              />
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
