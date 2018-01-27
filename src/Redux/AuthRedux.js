import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'
import * as R from 'ramda'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  loginRequest: ['email', 'password', 'tenant'],
  loginResultSuccess: ['account'],
  loginResultFailure: ['error'],
  logoutRequest: null,
  // left logout() available, in case we want to add cancellations 
  logoutResult: undefined,
})

export const AuthTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  session: {
    account: null,
    fetching: false,
    error: null,
  },
})

/* ------------- Reducers ------------- */

export const request = (state) =>
  state.set('session', { 
    ...state.session,
    fetching: true, 
    error: null 
  })

export const resultSuccess = (state, {account}) => 
  state.set('session', { 
    ...state.session,
    account, 
    fetching: false, 
    error: null, 
  })

export const resultFailure = (state, {error}) => 
  state.set('session', { 
    ...state.session,
    fetching: false,
    error: error,
  })

export const logout = (state) => {
  return INITIAL_STATE
}

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.LOGIN_REQUEST]: request,
  [Types.LOGIN_RESULT_SUCCESS]: resultSuccess,
  [Types.LOGIN_RESULT_FAILURE]: resultFailure,
  [Types.LOGOUT_REQUEST]: logout,
  [Types.LOGOUT_RESULT]: logout,
})

const session = (path=[], state) => R.path(['auth', 'session'].concat(path), state)
export const AuthSelectors = {
  account: state => session(['account'], state),
  error: state => session(['error'], state),
  fetching: state => session(['fetching'], state),
}