import React from 'react'
import Card, { CardContent } from 'material-ui/Card'

import {
  Flex,
  Avatar,
  Heading,
  Text,
  Box,
  BackgroundImage,
  Badge,
} from 'rebass'

import placeholder from '../assets/placeholder-avatar.jpg'

import CleanLink from '../components/extended/CleanLink'
import CategoryPreview from '../components/CategoryPreview'

import { SocialIcon } from 'react-social-icons'

const HackStats = props => (
  <Card>
    <CardContent>
      {/* Top */}
      <Flex column>
        <BackgroundImage mb={3} src={props.image} />
        <Heading f={3} is="h1" mb={2}>
          {props.name}
        </Heading>
        <Box mx={-1} mb={3}>
          <Badge f={1} px={3} bg="pA400">
            Looking for Hackers
          </Badge>
        </Box>
      </Flex>
      {/* Bio */}
      <Text is="p" mb={3}>
        {props.brief}
      </Text>
      <Heading is="h2" f={1} mb={2}>
        This hack involves:
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
export default HackStats
