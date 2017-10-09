import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'
import AppBar from 'material-ui/AppBar'
import Button from 'material-ui/Button'
import Tabs, { Tab } from 'material-ui/Tabs'

import { Flex } from 'rebass'

import ArtTrackIcon from 'material-ui-icons/ArtTrack'
import TextFieldsIcon from 'material-ui-icons/TextFields'
import ViewListIcon from 'material-ui-icons/ViewList'
import TodayIcon from 'material-ui-icons/Today'
import EuroSymbolIcon from 'material-ui-icons/EuroSymbol'
import PeopleIcon from 'material-ui-icons/People'
import TagFacesIcon from 'material-ui-icons/TagFaces'
import HelpIcon from 'material-ui-icons/Help'

import PrettyPaper from './extended/PrettyPaper'

const ChallengeNav = props => (
  <PrettyPaper justify="center" component={Flex} mb={3}>
    <Tabs scrollable indicatorColor="primary" textColor="primary" centered>
      <Tab
        label="Description"
        icon={<TextFieldsIcon />}
        href="#challenge-description"
      />
      <Tab
        label="Subchallenges"
        icon={<ViewListIcon />}
        href="#challenge-subchallenges"
      />
      <Tab label="Agenda" icon={<TodayIcon />} href="#challenge-agenda" />
      <Tab label="Advisors" icon={<HelpIcon />} href="#challenge-advisors" />
      <Tab
        label="Participants"
        icon={<TagFacesIcon />}
        href="#challenge-participants"
      />
      <Tab label="Prizes" icon={<EuroSymbolIcon />} href="#challenge-prizes" />
      <Tab label="Sponsors" icon={<PeopleIcon />} href="#challenge-sponsors" />
    </Tabs>
  </PrettyPaper>
)

export default ChallengeNav
