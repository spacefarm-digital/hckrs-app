import React from 'react'
import { Link } from 'react-router-dom'

import { Flex, Box, Heading, Text } from 'rebass'

import TextField from 'material-ui/TextField'
import Grid from 'material-ui/Grid'
import Button from 'material-ui/Button'

import CategoriesField from '../components/CategoriesField'
import RadioControl from '../components/RadioControl'
import PrettyPaper from '../components/extended/PrettyPaper'
import PrettyLink from '../components/extended/PrettyLink'

class SignUpForm extends React.Component {
  render() {
    return (
      <div>
        <Box mb={4}>
          <Heading f={[3, 3, 4]} mb={2} center color="p500">
            Welcome to Hckrs
          </Heading>
          <Text center>
            Already have an account?{' '}
            <PrettyLink to="log-in">Log in here</PrettyLink>
          </Text>
        </Box>
        {/* Account type */}
        <Flex mb={2}>
          <RadioControl
            items={["👩‍💻 I'm a hacker", "👔 I'm a challenger"]}
            label="Account type"
          />
        </Flex>
        <Box mb={4}>
          <TextField required id="signUpEmail" label="✉️ Email" fullWidth />
        </Box>
        <Box mb={4}>
          <TextField
            required
            id="signUpPassword"
            label="🔑 Password"
            fullWidth
          />
        </Box>
        <Flex mb={4}>
          <CategoriesField
            required
            id="challengeCategories"
            label="I'm interested in:"
          />
        </Flex>
        <Flex justify="flex-end">
          <Button
            raised
            color="accent"
            fullWidth
            component={Link}
            to="/profile"
          >
            Sign up
          </Button>
        </Flex>
      </div>
    )
  }
}
export default SignUpForm
