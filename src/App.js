import React, { Component } from 'react'
import { Provider } from 'react-redux'
import createStore from './Redux'
import './App.scss'

const store = createStore()
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          Welcome
        </div>
      </Provider>
    )
  }
}

export default App