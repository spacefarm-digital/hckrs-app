import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'
import AppBar from 'material-ui/AppBar'
import Button from 'material-ui/Button'
import Tabs, { Tab } from 'material-ui/Tabs'

import { Flex } from 'rebass'

import ArtTrackIcon from 'material-ui-icons/ArtTrack'
import TextFieldsIcon from 'material-ui-icons/TextFields'
import ListIcon from 'material-ui-icons/List'
import DateRangeIcon from 'material-ui-icons/DateRange'
import RedeemIcon from 'material-ui-icons/Redeem'
import PeopleIcon from 'material-ui-icons/People'
import RecordVoiceOverIcon from 'material-ui-icons/RecordVoiceOver'
import AssignmentIndIcon from 'material-ui-icons/AssignmentInd'

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
        icon={<ListIcon />}
        href="#challenge-subchallenges"
      />
      <Tab label="Agenda" icon={<DateRangeIcon />} href="#challenge-agenda" />
      <Tab
        label="Advisors"
        icon={<RecordVoiceOverIcon />}
        href="#challenge-advisors"
      />
      <Tab
        label="Participants"
        icon={<PeopleIcon />}
        href="#challenge-participants"
      />
      <Tab label="Prizes" icon={<RedeemIcon />} href="#challenge-prizes" />
      <Tab
        label="Sponsors"
        icon={<AssignmentIndIcon />}
        href="#challenge-sponsors"
      />
    </Tabs>
  </PrettyPaper>
)

export default ChallengeNav
