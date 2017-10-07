import React from 'react'
import Input from 'material-ui/Input'
import Icon from 'material-ui/Icon'
import SearchIcon from 'material-ui-icons/Search'
import styled from 'styled-components'

import { Relative, Absolute } from 'rebass'

const PrettyInput = styled(Input)`
  line-height: 1.25 !important;
  height: 38px;
  input {
    padding: 0 !important;
    height: 100% !important;
    padding-left: 2rem !important;
    box-sizing: border-box !important;
  }
`

const Search = () => (
  <Relative>
    <PrettyInput
      placeholder="Search..."
      fullWidth
      inputProps={{
        'aria-label': 'Search',
      }}
    />
    <Absolute left top pt=".5em">
      <Icon color="primary">
        <SearchIcon />
      </Icon>
    </Absolute>
  </Relative>
)
export default Search
