import React from 'react'
import PropTypes from 'prop-types'
import Autosuggest from 'react-autosuggest'
import TextField from 'material-ui/TextField'
import Paper from 'material-ui/Paper'
import { MenuItem } from 'material-ui/Menu'
import match from 'autosuggest-highlight/match'
import parse from 'autosuggest-highlight/parse'
import { withStyles } from 'material-ui/styles'

import BlockAvatar from './extended/BlockAvatar'

import { Flex, Box } from 'rebass'

import placeholder from '../assets/placeholder-avatar.jpg'

const suggestions = [
  { name: 'Jorge Donisthorpe' },
  { name: 'Dacy Rickaert' },
  { name: 'Burnaby Bucklee' },
  { name: 'Gavrielle Sarten' },
  { name: 'Lissa Acomb' },
  { name: 'Estell Basindale' },
  { name: 'Marylin Saxon' },
  { name: 'Guinevere Theodoris' },
  { name: 'Sylvia Andrieux' },
  { name: 'Abbot Boog' },
  { name: 'Mikel Koppe' },
  { name: 'Ilyssa Lourens' },
  { name: 'Lorrie Antusch' },
  { name: 'Amelia Greeno' },
  { name: 'Charlie Digle' },
  { name: 'Jefferson Jentin' },
  { name: 'Evania Rankcom' },
  { name: 'Brigham Sallis' },
  { name: 'Marianna Hissie' },
  { name: 'Velvet Tathacott' },
  { name: 'Elnar Landall' },
  { name: 'Duffy Lanfear' },
  { name: 'Jerome Myford' },
  { name: 'Amata Shane' },
  { name: 'Agathe Derham' },
  { name: 'Kermit Goodlad' },
  { name: 'Coral Deniskevich' },
  { name: 'Trumann Livesley' },
  { name: 'Kirsteni Rihanek' },
  { name: 'Sharai Swynley' },
]

function renderInput(inputProps) {
  const { classes, autoFocus, value, ref, ...other } = inputProps

  return (
    <TextField
      autoFocus={autoFocus}
      className={classes.textField}
      value={value}
      label="Name"
      inputRef={ref}
      InputProps={{
        classes: {
          input: classes.input,
        },
        ...other,
      }}
    />
  )
}

function renderSuggestion(suggestion, { query, isHighlighted }) {
  const matches = match(suggestion.name, query)
  const parts = parse(suggestion.name, matches)

  return (
    <MenuItem selected={isHighlighted} component="div">
      <div>
        <Flex mx={-2} align="center">
          <Box px={2}>
            <BlockAvatar size="2em" src={placeholder} />
          </Box>
          <Box px={2}>
            {parts.map((part, index) => {
              return part.highlight ? (
                <span key={index} style={{ fontWeight: 300 }}>
                  {part.text}
                </span>
              ) : (
                <strong key={index} style={{ fontWeight: 500 }}>
                  {part.text}
                </strong>
              )
            })}
          </Box>
        </Flex>
      </div>
    </MenuItem>
  )
}

function renderSuggestionsContainer(options) {
  const { containerProps, children } = options

  return (
    <Paper {...containerProps} square>
      {children}
    </Paper>
  )
}

function getSuggestionValue(suggestion) {
  return suggestion.name
}

function getSuggestions(value) {
  const inputValue = value.trim().toLowerCase()
  const inputLength = inputValue.length
  let count = 0

  return inputLength === 0
    ? []
    : suggestions.filter(suggestion => {
        const keep =
          count < 5 &&
          suggestion.name.toLowerCase().slice(0, inputLength) === inputValue

        if (keep) {
          count += 1
        }

        return keep
      })
}

const styles = theme => ({
  container: {
    flexGrow: 1,
    position: 'relative',
  },
  suggestionsContainerOpen: {
    position: 'absolute',
    marginTop: theme.spacing.unit,
    marginBottom: theme.spacing.unit * 3,
    left: 0,
    right: 0,
    zIndex: 999,
  },
  suggestion: {
    display: 'block',
  },
  suggestionsList: {
    margin: 0,
    padding: 0,
    listStyleType: 'none',
    position: 'relative',
    zIndex: 3,
  },
  textField: {
    width: '100%',
  },
})

class IntegrationAutosuggest extends React.Component {
  state = {
    value: '',
    suggestions: [],
  }

  handleSuggestionsFetchRequested = ({ value }) => {
    this.setState({
      suggestions: getSuggestions(value),
    })
  }

  handleSuggestionsClearRequested = () => {
    this.setState({
      suggestions: [],
    })
  }

  handleChange = (event, { newValue }) => {
    this.setState({
      value: newValue,
    })
  }

  render() {
    const { classes } = this.props

    return (
      <Autosuggest
        theme={{
          container: classes.container,
          suggestionsContainerOpen: classes.suggestionsContainerOpen,
          suggestionsList: classes.suggestionsList,
          suggestion: classes.suggestion,
        }}
        renderInputComponent={renderInput}
        suggestions={this.state.suggestions}
        onSuggestionsFetchRequested={this.handleSuggestionsFetchRequested}
        onSuggestionsClearRequested={this.handleSuggestionsClearRequested}
        renderSuggestionsContainer={renderSuggestionsContainer}
        getSuggestionValue={getSuggestionValue}
        renderSuggestion={renderSuggestion}
        inputProps={{
          autoFocus: true,
          classes,
          placeholder: 'Start typing a name...',
          value: this.state.value,
          onChange: this.handleChange,
        }}
      />
    )
  }
}

IntegrationAutosuggest.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(IntegrationAutosuggest)
