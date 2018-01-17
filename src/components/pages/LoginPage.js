/*************************************
 * Name: Roman Alshehri
 *
 * Desc: LoginPage
 *
 **************************************/

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {login} from '../../actions/auth';
import LoginForm from '../forms/LoginForm';

class LoginPage extends Component {
  submit = (data) => this.props.login(data).then(() => this.props.history.push("/"));

  render() {
    return (<div>
      <h1>Login Page</h1>
      <LoginForm submit={this.submit}/>
      <Link to="/forget_password">Forget Password</Link>
    </div>);
  }
}

LoginPage.propTypes = {
  history: PropTypes.shape({push: PropTypes.func.isRequired}).isRequired,
  login: PropTypes.func.isRequired
}

export default connect(null, {login})(LoginPage);
