import React from 'react'
import Card, { CardContent } from 'material-ui/Card'

import ShadowAvatar from './extended/ShadowAvatar'

import { Flex, Avatar, Heading, Text, Box } from 'rebass'

import placeholder from '../assets/placeholder-avatar.jpg'

import CleanLink from '../components/extended/CleanLink'
import CategoryPreview from '../components/CategoryPreview'

import { SocialIcon } from 'react-social-icons'

const ChallengeStats = props => (
  <Card>
    <CardContent>
      {/* Top */}
      <Flex align="center" column mb={3}>
        <ShadowAvatar src={props.logo} size={80} mb={2} />
        <Heading f={3} is="h1" mb={2} center>
          {props.name}
        </Heading>
        <Flex align="center" wrap>
          <Text bold mr={2}>
            Challenger:
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
      <Flex wrap mx={-1}>
        <Box px={1} mb={2}>
          <SocialIcon
            url="http://twitter.com/demo"
            style={{ height: 36, width: 36 }}
          />
        </Box>
        <Box px={1} mb={2}>
          <SocialIcon
            url="http://facebook.com/demo"
            style={{ height: 36, width: 36 }}
          />
        </Box>
        <Box px={1} mb={2}>
          <SocialIcon
            url="http://github.com/demo"
            style={{ height: 36, width: 36 }}
          />
        </Box>
        <Box px={1} mb={2}>
          <SocialIcon
            url="mailto:demo@demo.com"
            style={{ height: 36, width: 36 }}
          />
        </Box>
      </Flex>
    </CardContent>
  </Card>
)
export default ChallengeStats
