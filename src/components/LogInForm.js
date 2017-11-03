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

class LogInForm extends React.Component {
  render() {
    return (
      <div>
        <Box mb={4}>
          <Heading f={[3, 3, 4]} mb={2} center color="p500">
            Welcome to Hckrs
          </Heading>
          <Text center>
            Don't have an account?{' '}
            <PrettyLink to="signup">Sign up here</PrettyLink>
          </Text>
        </Box>
        <Box mb={4}>
          <TextField required id="logInEmail" label="✉️ Email" fullWidth />
        </Box>
        <Box mb={4}>
          <TextField
            required
            id="logInPassword"
            label="🔑 Password"
            fullWidth
          />
        </Box>
        <Flex justify="flex-end">
          <Button
            raised
            color="accent"
            fullWidth
            component={Link}
            to="/profile"
          >
            Log in
          </Button>
        </Flex>
      </div>
    )
  }
}
export default LogInForm
