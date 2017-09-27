import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'
import AppBar from 'material-ui/AppBar'
import Tabs, { Tab } from 'material-ui/Tabs'

import NewChallengeMain from './NewChallengeMain'
import NewChallengeDescription from './NewChallengeDescription'
import NewChallengeSubchallenges from './NewChallengeSubchallenges'
import NewChallengeAgenda from './NewChallengeAgenda'
import NewChallengePrizes from './NewChallengePrizes'
import NewChallengeAdvisors from './NewChallengeAdvisors'

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
            <Tab label="2. Description" icon={<TextFieldsIcon />} disabled />
            <Tab label="3. Subchallenges" icon={<ViewListIcon />} disabled />
            <Tab label="4. Agenda" icon={<TodayIcon />} disabled />
            <Tab label="5. Prizes" icon={<EuroSymbolIcon />} disabled />
            <Tab label="6. Advisors" icon={<PeopleIcon />} disabled />
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
      </div>
    )
  }
}

NewChallengeNav.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default NewChallengeNav
