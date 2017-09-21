import React from 'react'
import Input from 'material-ui/Input'

const Search = () => (
  <Input
    placeholder="🔍 Search"
    width={500}
    inputProps={{
      'aria-label': 'Search',
    }}
  />
)
export default Search
