import { call, put, takeLatest, all } from 'redux-saga/effects'
// import { path, pick } from 'ramda'
import AuthActions, { AuthTypes } from '../Redux/AuthRedux'

export default function configure(api){
  return [ 
    takeLatest(AuthTypes.LOGIN_REQUEST, doLogin, api),
  ]
}

export function * doLogin (api, { email, password }) {  
  debugger 

  // const response = yield call(api.login, email, password)

  // if (response.ok) {    
  //   const user = parseAccount(response.data)
  //   api.setToken(user.token)
  //   yield put( AuthActions.loginResultSuccess(user))
  // } else {
  //   let message = 'Failed to login.'
  //   if(response.data && response.data.errors && response.data.errors[0]) {
  //     message = response.data.errors[0]
  //   }
  //   yield put( AuthActions.loginResultFailure( new AuthError(message, response)))
  // }
}

class AuthError extends Error {  
  constructor(message, response){
     super(message)
     this.response = response
  }
}