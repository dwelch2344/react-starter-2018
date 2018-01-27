import { takeLatest, put, /* call, all */ } from 'redux-saga/effects'
// import { path, pick } from 'ramda'
import AuthCreators, { AuthTypes } from '../Redux/AuthRedux'

export default function configure(api){
  return [ 
    takeLatest(AuthTypes.LOGIN_REQUEST, doLogin, api),
  ]
}

export function * doLogin (api, { email, password, tenant }) {  
  console.log('Do login: ', email, tenant, !!password )
  yield put( AuthCreators.loginResultFailure( new AuthError('Not Implemented Yet')))
    
  // const response = yield call(api.login, email, password)

  // if (response.ok) {    
  //   const user = parseAccount(response.data)
  //   api.setToken(user.token)
  //   yield put( AuthCreators.loginResultSuccess(user))
  // } else {
  //   let message = 'Failed to login.'
  //   if(response.data && response.data.errors && response.data.errors[0]) {
  //     message = response.data.errors[0]
  //   }
  //   yield put( AuthCreators.loginResultFailure( new AuthError(message, response)))
  // }
}

class AuthError extends Error {  
  constructor(message, response){
     super(message)
     this.response = response
  }
}