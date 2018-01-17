import React, {Component} from 'react';
import {Form, Button, Message} from 'semantic-ui-react';
import PropTypes from 'prop-types';
import isEmail from 'validator/lib/isEmail';
import InlineError from '../messages/InlineError';
// import {arInput} from '../../ar/form';

class ForgetPasswordForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        email: ''
      },
      loading: false,
      errors: {}
    };
  }

  onChange = e => {
    this.setState({
      ...this.state,
      data: {
        ...this.state.data,
        [e.target.name]: e.target.value
      }
    });
  }

  onSubmit = e => {
    e.preventDefault();
    const errors = this.validate(this.state.data);
    this.setState({errors});
    if (Object.keys(errors).length === 0) {
      this.setState({loading: true});
      this.props.submit(this.state.data).catch(err => {
        this.setState({errors: err.response.data.errors, loading: false})
      });
    }
  }

  validate = data => {
    const errors = {}
    if (!isEmail(data.email))
      errors.email = "Invalid email";
    return errors;
  }

  render() {
    const {data, errors, loading} = this.state;
    return (<Form onSubmit={this.onSubmit} loading={loading}>
      {!!errors.global && <Message negative="negative">{errors.global}</Message>}
      <Form.Field error={!!errors.email}>
        <label htmlFor="email">Email</label>
        <input type="email"
          id="email"
          name="email"
          placeholder="exmaple@example.com"
          value={data.email}
          onChange={this.onChange.bind(this)}/>
          {errors.email && <InlineError text={errors.email}
      />}
      </Form.Field>

      <Button primary="primary">Submit</Button>
    </Form>);
  }
}

ForgetPasswordForm.propTypes = {
  submit: PropTypes.func.isRequired
}

export default ForgetPasswordForm;
