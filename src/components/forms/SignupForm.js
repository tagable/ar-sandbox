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
import isEmail from 'validator/lib/isEmail';
import InlineError from '../messages/InlineError';

class SignupForm extends Component {
  state = {
    data: {
      username: '',
      email: '',
      password: '',
      confirmPassword: ''
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
    if(!isEmail(data.email)) errors.email = "Invalid email";
    if(!data.password) errors.password = "Can't be blank";
    if(data.password !== data.confirmPassword) errors.confirmPassword = "Password doesn't match!";
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

        <Form.Field error={!!errors.email}>
          <label htmlFor="email">Email</label>
          <input
            type="text"
            id="email"
            name="email"
            placeholder="exmaple@example.com"
            value={data.email}
            onChange={this.onChange.bind(this)}
          />
          {errors.email && <InlineError text={errors.email} />}
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

        <Form.Field error={!!errors.confirmPassword}>
          <label htmlFor="confirmPassword">confirmPassword</label>
          <input type="password" id="confirmPassword" name="confirmPassword"
            placeholder="Repeat your password"
            value={data.confirmPassword}
            onChange={this.onChange.bind(this)}
          />
          {errors.confirmPassword && <InlineError text={errors.confirmPassword} />}
        </Form.Field>

        <Button primary>Signup</Button>
      </Form>
    );
  }
}

SignupForm.propTypes = {
  submit: PropTypes.func.isRequired,
}

export default SignupForm;
