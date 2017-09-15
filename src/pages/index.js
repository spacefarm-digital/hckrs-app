/* eslint-disable flowtype/require-valid-file-annotation */

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Button from 'material-ui/Button'
import Dialog, {
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
} from 'material-ui/Dialog'
import Typography from 'material-ui/Typography'
import Card, { CardContent } from 'material-ui/Card'
import withStyles from 'material-ui/styles/withStyles'
import withRoot from '../components/withRoot'
import Grid from 'material-ui/Grid'

import { Box } from 'rebass'

class Index extends Component {
  state = {
    open: false,
  }

  handleRequestClose = () => {
    this.setState({
      open: false,
    })
  }

  handleClick = () => {
    this.setState({
      open: true,
    })
  }

  render() {
    return (
      <div>
        <Dialog open={this.state.open} onRequestClose={this.handleRequestClose}>
          <DialogTitle>Modal heading</DialogTitle>
          <DialogContent>
            <DialogContentText>Hello world! 🦄</DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button color="primary" onClick={this.handleRequestClose}>
              Close
            </Button>
          </DialogActions>
        </Dialog>

        <Grid justify="center" align="center" container direction="column">
          <Box w="50%">
            <Card>
              <CardContent>
                <Box mb={2}>
                  <Typography type="display1" align="center">
                    Hackrs.eu
                  </Typography>
                  <Typography type="subheading" align="center">
                    WIP
                  </Typography>
                </Box>
                <Grid justify="center" container gutterBottom>
                  <Button
                    align="center"
                    raised
                    color="accent"
                    onClick={this.handleClick}
                  >
                    Open test modal
                  </Button>
                </Grid>
              </CardContent>
            </Card>
          </Box>
        </Grid>
      </div>
    )
  }
}
export default withRoot(Index)
