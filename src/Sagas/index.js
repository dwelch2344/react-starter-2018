import { all } from 'redux-saga/effects'
import API from '../Services/Api'

import authSagas from './AuthSagas'

const api = API.create( process.env.API_BASE_URL || 'http://localhost:5000')

/* ------------- Connect Types To Sagas ------------- */

export default function * root () {
  yield all( [].concat(
    authSagas(api),
  ))
}
