import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'

import { Alert } from 'react-bootstrap'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import AuthCreators, { AuthSelectors } from '../Redux/AuthRedux'

@connect(
  state => ({    
    account: AuthSelectors.account(state),
  }),
  dispatch => ({
    actions: bindActionCreators({ ...AuthCreators }, dispatch)
  })
)
export default class LoginPage extends Component { 

  login = values => {
    const { actions } = this.props
    actions.loginRequest(values.email, values.password, values.tenant)
  }

  logout = () => {
    const { actions } = this.props
    actions.logoutRequest()
  }

  render(){    
    const { account } = this.props
    return (
      <div className="content margin-top-sm">
        <div className="col-sm-12 col-md-6 col-md-offset-2 margin">
          <div className="card">
            <div className="content">
              { account && (
                <Alert bsStyle="success">
                  You are already logged in as {account.email} <br/><br/>
                  Enter another account's credentials to switch accounts, or {' '}
                  <a onClick={this.logout}>Logout</a>
                </Alert>
              )}
              <LoginForm onSubmit={this.login}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

@reduxForm({form: 'defaultLoginForm'})
class LoginForm extends Component { 
  render(){
    const { handleSubmit } = this.props
    return (
      <form className="form-horizontal" onSubmit={handleSubmit}>
        <div className="form-group">
          <div className="col-md-12">
            <Field name="tenant" component="input" type="text" placeholder="Tenant ID"  className="form-control"/>
          </div>
        </div>
        <div className="form-group">
          <div className="col-md-12">
            <Field name="email" component="input" type="text" placeholder="Email"  className="form-control"/>
          </div>
        </div>
        <div className="form-group">
            <div className="col-md-12">
              <Field name="password" component="input" type="password" placeholder="Password"  className="form-control"/>
            </div>
        </div>
        <div className="form-group">
            <div className="col-md-12">
                <button className="btn btn-block btn-fill btn-info" type="submit">Sign in</button>
            </div>
        </div>
      </form>
    )
  }
}