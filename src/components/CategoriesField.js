import React from 'react'
import { FormControl, FormLabel } from 'material-ui/Form'

import categories from '../data/categories'

import CategoryCheckbox from '../components/CategoryCheckbox'

import { Flex, Box } from 'rebass'

class CategoriesField extends React.Component {
  render() {
    return (
      <FormControl component="fieldset">
        <Box mb={3}>
          <FormLabel component="legend">Pick categories</FormLabel>
        </Box>
        <Flex mx={-2} wrap>
          {categories.map((category, value) => {
            return (
              <Box px={2} mb={3}>
                <CategoryCheckbox
                  title={category}
                  key={value}
                  name={category}
                />
              </Box>
            )
          })}
        </Flex>
      </FormControl>
    )
  }
}

export default CategoriesField
