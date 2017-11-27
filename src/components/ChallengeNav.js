import React from 'react'
import Tabs, { Tab } from 'material-ui/Tabs'

import { Flex } from 'rebass'

import LightbulbOutlineIcon from 'material-ui-icons/LightbulbOutline'
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
        label="Hacks"
        icon={<LightbulbOutlineIcon />}
        href="#challenge-hacks"
      />
      <Tab
        label="Description"
        icon={<TextFieldsIcon />}
        href="#challenge-description"
      />
      <Tab
        label="Sub-challenges"
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
