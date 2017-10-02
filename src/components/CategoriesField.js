import React, { Component } from 'react'
import styled from 'styled-components'
import Input, { InputLabel } from 'material-ui/Input'
import { MenuItem } from 'material-ui/Menu'
import { FormControl } from 'material-ui/Form'
import Select from 'material-ui/Select'

import UploadOverlay from './UploadOverlay'

import categories from '../data/categories'

class CategoriesField extends React.Component {
  state = {
    selectedCategories: [],
  }
  handleChange = event => {
    this.setState({ selectedCategories: event.target.value })
  }
  render() {
    return (
      <div>
        <FormControl>
          <InputLabel htmlFor="name-multiple">Categories</InputLabel>
          <Select
            multiple
            value={this.state.selectedCategories}
            onChange={this.handleChange}
            input={<Input id="category-multiple" />}
          >
            {categories.map(category => (
              <MenuItem
                key={category}
                value={category}
                style={{
                  fontWeight:
                    this.state.selectedCategories.indexOf(category) !== -1
                      ? '500'
                      : '400',
                }}
              >
                {category}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>
    )
  }
}
export default CategoriesField
