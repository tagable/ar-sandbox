/*************************************
 * Name: Roman Alshehri
 * Data: 
 *
 * Desc: SignupForm.js is a component that
 * can be use in many place.
 *
 **************************************/


import React, { Component } from 'react';
import { Form, Button, Message } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import InlineError from '../messages/InlineError';

class LoginPage extends Component {
  state = {
    data: {
      username: '',
      password: '',
    },
    loading: false,
    errors: {}
  };

  onChange = e => {
    this.setState({
      data: { ...this.state.data, [e.target.name]: e.target.value }
    });
  }

  onSubmit = (e) => {
    e.preventDefault();
    const errors = this.validate(this.state.data);
    this.setState({ errors });
    if(Object.keys(errors).length === 0){
      this.setState({ loading: true });
      this.props.submit(this.state.data)
        .catch(err =>
          this.setState({ errors: err.response.data.errors, loading: false })
        );
    }
  }

  validate = data => {
    const errors = {}
    if(!data.username) errors.username = "Can't be blank";
    if(!data.password) errors.password = "Can't be blank";
    return errors;
  }

  render() {
    const { data, errors, loading } = this.state;
    return (
      <Form onSubmit={this.onSubmit} loading={loading}>
        {errors.global && (
          <Message negative>
            <Message.Header>Something went wrong</Message.Header>
            <p>{errors.global}</p>
          </Message>
        )}

        <Form.Field error={!!errors.username}>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            name="username"
            placeholder="ali"
            value={data.username}
            onChange={this.onChange.bind(this)}
          />
          {errors.username && <InlineError text={errors.username} />}
        </Form.Field>

        <Form.Field error={!!errors.password}>
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password"
            placeholder="Your password"
            value={data.password}
            onChange={this.onChange.bind(this)}
          />
          {errors.password && <InlineError text={errors.password} />}
        </Form.Field>


        <Button primary>Login</Button>
      </Form>
    );
  }
}

LoginPage.propTypes = {
  submit: PropTypes.func.isRequired,
}

export default LoginPage;
