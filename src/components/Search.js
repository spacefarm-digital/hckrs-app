import React from 'react'
import Input from 'material-ui/Input'

const Search = () => (
  <Input
    placeholder="🔍 Search"
    inputProps={{
      'aria-label': 'Search',
    }}
    fullWidth
  />
)
export default Search
