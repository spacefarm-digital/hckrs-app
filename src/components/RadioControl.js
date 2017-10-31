import React from 'react'
import Radio, { RadioGroup } from 'material-ui/Radio'
import { FormLabel, FormControl, FormControlLabel } from 'material-ui/Form'

import { Flex } from 'rebass'

class RadioControl extends React.Component {
  state = {
    value: '',
  }

  handleChange = (event, value) => {
    this.setState({ value })
  }

  render() {
    return (
      <FormControl component="fieldset" required>
        <FormLabel component="legend">{this.props.label}</FormLabel>
        <RadioGroup
          aria-label={this.props.label}
          name={this.props.label}
          value={this.state.value}
          onChange={this.handleChange}
          component={Flex}
          row
        >
          {this.props.items.map(item => (
            <FormControlLabel value={item} control={<Radio />} label={item} />
          ))}
        </RadioGroup>
      </FormControl>
    )
  }
}

export default RadioControl
