import React, { Component } from 'react'
import { Provider } from 'react-redux'

import './Config/ReactotronConfig'
import createStore from './Redux'
import Layout from './Containers/Layout'

const store = createStore()
class App extends Component {

  // TODO figure out why we "flicker" - or if it's not even in prod
  // for now, just delay render
  state = {
    mounted: false 
  }
  componentDidMount(){
    setTimeout(() => {
      this.setState({
        mounted: true
      })
    }, 250)    
  }
  render() {
    if( !this.state.mounted ){
      return null 
    }
    return (
      <Provider store={store}>
        <Layout/>
      </Provider>
    )
  }
}

export default App