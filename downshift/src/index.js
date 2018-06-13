import React from 'react'
import ReactDOM from 'react-dom'
import Downshift from 'downshift'
import { all as starWarsNames } from 'starwars-names'

const items = starWarsNames.map(name => ({
  value: name,
  id: name.toLowerCase()
}))

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
              highlightedIndex
            }) => (
              <div>
                <label {...getLabelProps()}>Select a Star Wars character</label>
                <input {...getInputProps()} />
                <button {...getToggleButtonProps()}></button>
                <ul>
                  {isOpen
                    ? items.map((item, index) => (
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
