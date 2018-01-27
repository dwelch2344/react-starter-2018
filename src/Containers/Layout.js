import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Route } from 'react-router-dom'
import { ConnectedRouter } from 'react-router-redux'
import { ToastContainer } from 'react-toastify'

import NavBar, { Sidebar, routes } from './Nav'
import { history } from '../Redux'


import { AuthSelectors } from '../Redux/AuthRedux'

@connect(
  state => ({
    account: AuthSelectors.account(state),
    fetching: AuthSelectors.fetching(state),
  }),
  dispatch => ({    
  })
)
export default class Layout extends Component {

  render(){   
    const { account } = this.props
    return (
      <ConnectedRouter history={history}>
        <div className="wrapper">          
          <Sidebar account={account} history={history} />
            <div className="main-panel">
              <NavBar account={account}/>
              <div>
                <ToastContainer
                  type="default"
                  closeOnClick
                  pauseOnHover
                  autoClose={5000}
                  position="top-right"
                  newestOnTop={false}
                  hideProgressBar={false}
                />
                {routes.map((route, index) => (
                  // Render more <Route>s with the same paths as
                  // above, but different components this time.
                  <Route
                    key={index}
                    path={route.path}
                    exact={route.exact}
                    component={route.main}
                  />
                ))}
              </div>
            </div>          
        </div>
      </ConnectedRouter>
    )
  }
}