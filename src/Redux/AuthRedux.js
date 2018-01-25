import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  loginRequest: ['email', 'password', 'context'],
  loginResultSuccess: ['user'],
  loginResultFailure: ['error'],
  logoutRequest: null,
  // left logout() available, in case we want to add cancellations 
  logoutResult: undefined,
})

export const AuthTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  user: null,
  fetching: false,
  error: null,
})

/* ------------- Reducers ------------- */

export const request = (state) =>
  state.merge({ fetching: true, user: null, error: null })

export const resultSuccess = (state, action) => {
  const { user } = action
  return state.merge({ fetching: false, user })
}
export const resultFailure = (state, action) => {
  const { error } = action
  return state.merge({ fetching: false, error })
}

export const logout = (state) => {
  return state.merge(INITIAL_STATE)
}

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.LOGIN_REQUEST]: request,
  [Types.LOGIN_RESULT_SUCCESS]: resultSuccess,
  [Types.LOGIN_RESULT_FAILURE]: resultFailure,
  [Types.LOGOUT_REQUEST]: logout,
  [Types.LOGOUT_RESULT]: logout,
})
