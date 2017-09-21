import React from 'react'
import Card, { CardContent } from 'material-ui/Card'

import { Avatar, Flex, Heading, Text, Box, Sticky } from 'rebass'

import placeholder from '../assets/placeholder-avatar.jpg'

import CleanLink from '../components/extended/CleanLink'
import CategoryChip from '../components/CategoryChip'

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
            <Flex wrap mx={-2} is="ul">
              <Box is="li" px={2}>
                <CleanLink to="/">
                  <Avatar src={placeholder} size="2em" />
                </CleanLink>
              </Box>
              <Box is="li" px={2}>
                <CleanLink to="/">
                  <Avatar src={placeholder} size="2em" />
                </CleanLink>
              </Box>
              <Box is="li" px={2}>
                <CleanLink to="/">
                  <Avatar src={placeholder} size="2em" />
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
          Categories:
        </Heading>
        <Flex is="ul" mx={-1} wrap>
          <Box is="li" px={1} mb={2}>
            <CategoryChip color="#bcf5dd" to="/category">
              👔 Fashion
            </CategoryChip>
          </Box>
          <Box is="li" px={1} mb={2}>
            <CategoryChip color="#B6F5F4" to="/category">
              ✈️ Aviation
            </CategoryChip>
          </Box>
          <Box is="li" px={1} mb={2}>
            <CategoryChip color="#F0F59C" to="/category">
              🍳 Cooking
            </CategoryChip>
          </Box>
        </Flex>
      </CardContent>
    </Card>
  </Sticky>
)
export default ProfileStats
