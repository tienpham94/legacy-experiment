import React from 'react'
import ReactDOM from 'react-dom'
import Downshift from 'downshift'
import { all as starWarsNames } from 'starwars-names'
import matchSorter from 'match-sorter'

const items = starWarsNames.map(name => ({
  value: name,
  id: name.toLowerCase()
}))

const getItems = value => value ? matchSorter(items, value, {keys: ['value']}) : items

const itemToString = item => (item ? item.value : '')

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Autocomplete rocks!</h1>
        <div>
          <Downshift itemToString={itemToString}>
            {({
              getLabelProps,
              getInputProps,
              getItemProps,
              getToggleButtonProps,
              isOpen,
              selectedItem,
              clearSelection,
              highlightedIndex,
              inputValue
            }) => (
              <div>
                <label {...getLabelProps()}>Select a Star Wars character</label>
                <input {...getInputProps()} />
                <button {...getToggleButtonProps()}>{isOpen ? 'close' : 'open'}</button>
                {selectedItem ? <button onClick={clearSelection}>x</button> : null}
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
