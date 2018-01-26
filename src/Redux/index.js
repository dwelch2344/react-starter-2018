import { combineReducers } from 'redux'
import createHistory from 'history/createBrowserHistory'
import { routerReducer, routerMiddleware, push } from 'react-router-redux'

import configureStore from './CreateStore'
import rootSaga from '../Sagas/'

export const history = createHistory()
const localRouterMiddleware = routerMiddleware(history)

/* ------------- Assemble The Reducers ------------- */
export const reducers = combineReducers({
  // nav: require('./NavigationRedux').reducer,
  // startup: require('./StartupRedux').reducer,
  router: routerReducer,
  auth: require('./AuthRedux').reducer,
})

export default () => {
  let { store, sagasManager, sagaMiddleware } = configureStore(reducers, rootSaga, localRouterMiddleware)

  if (module.hot) {
    module.hot.accept(() => {
      const nextRootReducer = require('./').reducers
      store.replaceReducer(nextRootReducer)

      const newYieldedSagas = require('../Sagas').default
      sagasManager.cancel()
      sagasManager.done.then(() => {
        sagasManager = sagaMiddleware.run(newYieldedSagas)
      })
    })
  }

  return store
}
