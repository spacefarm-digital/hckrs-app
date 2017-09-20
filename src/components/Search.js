import React from 'react'
import Input from 'material-ui/Input'
import style from 'styled-components'

const SearchInput = styled(input)``

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
