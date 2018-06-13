import React from 'react'
import ReactDOM from 'react-dom'
import Downshift from 'downshift'
import { all as starWarsNames } from 'starwars-names'

console.log(starWarsNames);

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Autocomplete rocks!</h1>
        <div>
          <Downshift>
            {({ getLabelProps, getInputProps }) => (
              <div>
                <label {...getLabelProps()}>Select a Star Wars character</label>
                <input {...getInputProps()} />
                <ul />
              </div>
            )}
          </Downshift>
        </div>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))
