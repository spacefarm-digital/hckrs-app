// @flow weak

import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card'
import Button from 'material-ui/Button'
import Typography from 'material-ui/Typography'

import placeholder from '../assets/placeholder.jpg'

const propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
}

const defaultProps = {
    title: "Default title",
    description: "Default description. It will actually be much, much, much longer. Not that much though.",
    image: "http://d33wubrfki0l68.cloudfront.net/23bb750557ddff734113452c4e5f1bd7f0fa1f98/35c41/static/placeholder-object.9c517475.jpg",
}

const WideCardMedia = styled(CardMedia)`
    height: 0;
    position: relative;
    padding-bottom: 56.25%;
`

const ChallengePreview = (props) => {
  return (
    <div>
      <Card>
        <WideCardMedia image={props.image} title="Contemplative Reptile" />
        <CardContent>
          <Typography type="headline" component="h2">
            {props.title}
          </Typography>
          <Typography component="p">{props.description}</Typography>
        </CardContent>
        <CardActions>
          <Button dense color="primary">
            Share
          </Button>
        </CardActions>
      </Card>
    </div>
  )
}

ChallengePreview.propTypes = propTypes;
ChallengePreview.defaultProps = defaultProps;

export default ChallengePreview
