import React, { Component } from 'react'
import { Provider } from 'react-redux'

import './Config/ReactotronConfig'
import createStore from './Redux'
import Layout from './Containers/Layout'

const store = createStore()
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Layout/>
      </Provider>
    )
  }
}

export default App