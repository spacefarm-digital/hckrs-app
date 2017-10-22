import React from 'react'
import ShadowAvatar from './extended/ShadowAvatar'

import { Flex, Avatar, Heading, Text, Box } from 'rebass'

import placeholder from '../assets/placeholder-avatar.jpg'

import PrettyPaper from '../components/extended/PrettyPaper'
import CleanLink from '../components/extended/CleanLink'
import CategoryPreview from '../components/CategoryPreview'

const DraftChallengeStats = props => (
  <PrettyPaper p={3}>
    {/* Top */}
    <Flex align="center" column mb={3}>
      <ShadowAvatar src={props.logo} size={80} mb={2} />
      <Heading f={3} is="h1" mb={2} center>
        {props.name}
      </Heading>
      <Flex align="center" wrap>
        <Text bold mr={2}>
          Hosted by:
        </Text>
        <Flex wrap mx={-1} align="center" is="ul">
          <Box is="li" px={1}>
            <CleanLink to="/">
              <Avatar src={placeholder} size="1.5em" />
            </CleanLink>
          </Box>
        </Flex>
      </Flex>
    </Flex>
    {/* Bio */}
    <Text is="p" mb={3}>
      {props.brief}
    </Text>
    <Heading is="h2" f={1} mb={2}>
      Challenge categories:
    </Heading>
    <Flex is="ul" mx={-1} mb={3} wrap>
      {props.categories.map((category, index) => (
        <Box is="li" px={1} mb={2}>
          <CleanLink to="/" key={index}>
            <CategoryPreview title={category} />
          </CleanLink>
        </Box>
      ))}
    </Flex>
  </PrettyPaper>
)
export default DraftChallengeStats
