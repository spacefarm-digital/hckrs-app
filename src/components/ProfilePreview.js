// @flow weak

import React from 'react'
import PropTypes from 'prop-types'
import Card, { CardContent } from 'material-ui/Card'
import Typography from 'material-ui/Typography'
import Grid from 'material-ui/Grid'

import { Avatar } from 'rebass'

import placeholder from '../assets/placeholder-avatar.jpg'

const propTypes = {
  name: PropTypes.string.isRequired,
  numberOfHacks: PropTypes.number.isRequired,
  avatar: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  categories: PropTypes.arrayOf(PropTypes.string),
}

const defaultProps = {
  name: 'Default name',
  numberOfHacks: 0,
  avatar: placeholder,
  location: 'The world',
}

const ProfilePreview = props => {
  return (
    <Card>
      <CardContent>
        <Grid container align="center">
          <Grid item>
            <Avatar src={props.avatar} size="4rem" />
          </Grid>
          <Grid item>
            <Typography type="title" component="h2" gutterBottom>
              {props.name}
            </Typography>
            <Typography>
              {props.numberOfHacks} hacks, Located in {props.location}
            </Typography>
            <Typography>Interested in: {props.categories}</Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  )
}

ProfilePreview.propTypes = propTypes
ProfilePreview.defaultProps = defaultProps

export default ProfilePreview
