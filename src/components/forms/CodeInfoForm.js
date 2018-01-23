/*************************************
 * Name: Roman Alshehri
 * Data: 
 *
 * Desc: SignupForm.js is a component that
 * can be use in many place.
 *
 **************************************/


import React, { Component } from 'react';
import { Form, Button, Message, TextArea } from 'semantic-ui-react';
import PropTypes from 'prop-types';
// import InlineError from '../messages/InlineError';

class CodeInfoForm extends Component {
  state = {
    data: {
      code: this.props.code
    },
    loading: false,
    errors: {}
  };

  componentWillReceiveProps(nextProps){
    console.log("this", this.porps, "nextProps", nextProps);
    this.setState({
      data: {
        code: nextProps.code
      }
    })
  }

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
      this.props.submit(this.state.data.code)
        .then(() => this.setState({ loading: false}))
        .catch(err =>
          this.setState({ errors: err.response.data.errors, loading: false })
        );
    }
  }

  validate = data => {
    const errors = {}
    // if(!data.username) errors.username = "Can't be blank";
    // if(!data.password) errors.password = "Can't be blank";
    return errors;
  }

  render() {
    const { data, errors, loading } = this.state;
    console.log(this.props);
    return (
      <Form onSubmit={this.onSubmit} loading={loading}>
        {errors.global && (
          <Message negative>
            <Message.Header>Something went wrong</Message.Header>
            <p>{errors.global}</p>
          </Message>
        )}

        <Form.Field 
          control={TextArea} 
          id="code"
          name="code"
          placeholder=""
          value={data.code}
          onChange={this.onChange.bind(this)}
          />
        <Button primary>Submit</Button>
      </Form>
    );
  }
}

CodeInfoForm.propTypes = {
  submit: PropTypes.func.isRequired,
  code: PropTypes.string.isRequired,
}

export default CodeInfoForm;
