import React from 'react'
import Card, { CardContent } from 'material-ui/Card'

import { Avatar, Flex, Heading, Text, Box, Sticky } from 'rebass'

import placeholder from '../assets/placeholder-avatar.jpg'

import CleanLink from '../components/extended/CleanLink'
import CategoryChip from '../components/CategoryChip'

import { SocialIcon } from 'react-social-icons'

const ProfileStats = () => (
  <Sticky top pt={2}>
    <Card>
      <CardContent>
        {/* Top */}
        <Flex align="center" column mb={3}>
          <Avatar src={placeholder} size={80} mb={2} />
          <Heading f={3} is="h1" mb={2}>
            Hacker name
          </Heading>
          <Flex align="center" wrap>
            <Text bold mr={2}>
              Teams:
            </Text>
            <Flex wrap mx={-1} align="center" is="ul">
              <Box is="li" px={1}>
                <CleanLink to="/">
                  <Avatar src={placeholder} size="1.5em" />
                </CleanLink>
              </Box>
              <Box is="li" px={1}>
                <CleanLink to="/">
                  <Avatar src={placeholder} size="1.5em" />
                </CleanLink>
              </Box>
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
          Bio text. This will be a little bit longer, closer to a Twitter bio
        </Text>
        <Heading is="h2" f={1} mb={2}>
          Interested in:
        </Heading>
        <Flex is="ul" mx={-1} mb={3} wrap>
          <Box is="li" px={1} mb={2}>
            <CleanLink to="/">
              <CategoryChip color="#bcf5dd" to="/category">
                👔 Fashion
              </CategoryChip>
            </CleanLink>
          </Box>
          <Box is="li" px={1} mb={2}>
            <CleanLink to="/">
              <CategoryChip color="#B6F5F4" to="/category">
                ✈️ Aviation
              </CategoryChip>
            </CleanLink>
          </Box>
          <Box is="li" px={1} mb={2}>
            <CleanLink to="/">
              <CategoryChip color="#F0F59C" to="/category">
                🍳 Cooking
              </CategoryChip>
            </CleanLink>
          </Box>
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
  </Sticky>
)
export default ProfileStats
