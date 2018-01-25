import React from 'react'
import { Route } from 'react-router-dom'
import { ConnectedRouter } from 'react-router-redux'


import NavBar, {routes} from './Nav'
import { history } from '../Redux'
const Layout = () => {

  return (
    <ConnectedRouter history={history}>
      <div style={{ display: 'flex' }}>
        <div style={{
          padding: '10px',
          width: '40%',
          background: '#f0f0f0'
        }}>
          <NavBar/>
        </div>

        <div style={{ flex: 1, padding: '10px' }}>
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
    </ConnectedRouter>
  )
}

export default Layout