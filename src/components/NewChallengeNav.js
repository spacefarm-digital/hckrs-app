import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'
import AppBar from 'material-ui/AppBar'
import Button from 'material-ui/Button'
import Tabs, { Tab } from 'material-ui/Tabs'

import NewChallengeMain from './NewChallengeMain'
import NewChallengeDescription from './NewChallengeDescription'
import NewChallengeSubchallenges from './NewChallengeSubchallenges'
import NewChallengeAgenda from './NewChallengeAgenda'
import NewChallengePrizes from './NewChallengePrizes'
import NewChallengeAdvisors from './NewChallengeAdvisors'

import { Flex } from 'rebass'

import ArtTrackIcon from 'material-ui-icons/ArtTrack'
import TextFieldsIcon from 'material-ui-icons/TextFields'
import ViewListIcon from 'material-ui-icons/ViewList'
import TodayIcon from 'material-ui-icons/Today'
import EuroSymbolIcon from 'material-ui-icons/EuroSymbol'
import PeopleIcon from 'material-ui-icons/People'

function TabContainer(props) {
  return <div style={{ padding: 20 }}>{props.children}</div>
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
}

class NewChallengeNav extends React.Component {
  state = {
    value: 0,
  }

  handleChange = (event, value) => {
    this.setState({ value })
  }

  goToNext = event => {
    if (this.state.value < 5)
      this.setState({
        value: this.state.value + 1,
      })
  }

  render() {
    const { value } = this.state

    return (
      <div>
        <AppBar position="static" color="#fff">
          <Tabs
            value={value}
            onChange={this.handleChange}
            scrollable
            indicatorColor="primary"
            textColor="primary"
            centered
          >
            <Tab label="1. General" icon={<ArtTrackIcon />} />
            <Tab label="2. Description" icon={<TextFieldsIcon />} />
            <Tab label="3. Subchallenges" icon={<ViewListIcon />} />
            <Tab label="4. Agenda" icon={<TodayIcon />} />
            <Tab label="5. Prizes" icon={<EuroSymbolIcon />} />
            <Tab label="6. Advisors" icon={<PeopleIcon />} />
          </Tabs>
        </AppBar>
        {value === 0 && (
          <TabContainer>
            <NewChallengeMain />
          </TabContainer>
        )}
        {value === 1 && (
          <TabContainer>
            <NewChallengeDescription />
          </TabContainer>
        )}
        {value === 2 && (
          <TabContainer>
            <NewChallengeSubchallenges />
          </TabContainer>
        )}
        {value === 3 && (
          <TabContainer>
            <NewChallengeAgenda />
          </TabContainer>
        )}
        {value === 4 && (
          <TabContainer>
            <NewChallengePrizes />
          </TabContainer>
        )}
        {value === 5 && (
          <TabContainer>
            <NewChallengeAdvisors />
          </TabContainer>
        )}
        <Flex justify="flex-end" px={3} pb={4}>
          <Button onClick={this.goToNext} raised color="primary">
            Next
          </Button>
        </Flex>
      </div>
    )
  }
}

NewChallengeNav.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default NewChallengeNav
