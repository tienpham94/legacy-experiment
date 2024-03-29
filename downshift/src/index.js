import React from 'react'
import ReactDOM from 'react-dom'
import Downshift from 'downshift'
import { all as starWarsNames } from 'starwars-names'
import matchSorter from 'match-sorter'

const items = starWarsNames.map(name => ({
  value: name,
  id: name.toLowerCase()
}))

const getItems = value =>
  value ? matchSorter(items, value, { keys: ['value'] }) : items

const itemToString = item => (item ? item.value : '')

const stateReducer = (state, changes) => {
  if(changes.type === Downshift.stateChangeTypes.blurButton){
    return {...changes, isOpen: true}
  }
  return changes
}

class App extends React.Component {
  state = { isOpen: false }

  handleStateChange = changes => {
    // Ability to change downshift behavior on changes
    console.log(changes)
    if (changes.hasOwnProperty('isOpen') && changes.type !== Downshift.stateChangeTypes.blurButton) {
      this.setState({ isOpen: changes.isOpen })
    }
  }

  render() {
    return (
      <div>
        <h1>Autocomplete rocks!</h1>
        <div>
          <Downshift
            stateReducer={stateReducer}
            itemToString={itemToString}
            // onStateChange={this.handleStateChange}
          >
            {({
              getLabelProps,
              getInputProps,
              getItemProps,
              getToggleButtonProps,

              clearSelection,

              highlightedIndex,
              selectedItem,
              isOpen,
              inputValue
            }) => (
              <div>
                <label {...getLabelProps()}>Select a Star Wars character</label>
                <input {...getInputProps()} />
                <button {...getToggleButtonProps()}>
                  {isOpen ? 'close' : 'open'}
                </button>
                {selectedItem ? (
                  <button onClick={clearSelection}>x</button>
                ) : null}
                <ul>
                  {isOpen
                    ? getItems(inputValue).map((item, index) => (
                        <li
                          {...getItemProps({
                            item,
                            key: item.id,
                            style: {
                              backgroundColor:
                                index === highlightedIndex ? 'gray' : null
                            }
                          })}
                        >
                          {item.value}
                        </li>
                      ))
                    : null}
                </ul>
              </div>
            )}
          </Downshift>
        </div>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))
