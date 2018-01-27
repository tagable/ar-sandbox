/*************************************
 * Name: Roman Alshehri
 * Data:
 *
 * Desc: SignupForm.js is a component that
 * can be use in many place.
 *
 **************************************/


import React, { Component } from 'react';
import { Form, Button, Message, Segment } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import renderHTML from 'react-render-html';
import MyCodeMirror from "../../../../utils/my-codeMirror.js";

class HtmlCoder extends Component {
  state = {
    code: this.props.code,
    loading: false,
    errors: {}
  };

  componentWillReceiveProps(nextProps){
    this.setState({
      code: nextProps.code
    });
  }

  onChange = (val) => {
    console.log(val);
    this.setState({
      code: val
    });
  }

  onSubmit = (e) => {
    e.preventDefault();
    const errors = this.validate(this.state.data);
    this.setState({ errors });
    if(Object.keys(errors).length === 0){
      this.setState({ loading: true });
      this.props.submit(this.state.code)
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
    const { code, errors, loading } = this.state;

    // {this.props.code && <MyCodeMirror code={code} onChange={this.onChange} />}
    // console.log("CodeInfoFrom", "("+ this.props.code + ")");
    return (
      <div>
        <h3>{this.props.coder.title}  - HtmlCoder</h3>
        <Segment>{this.props.coder.desc}</Segment>
        <Form onSubmit={this.onSubmit} loading={loading}>
          {errors.global && (
            <Message negative>
              <Message.Header>Something went wrong</Message.Header>
              <p>{errors.global}</p>
            </Message>
          )}

          <MyCodeMirror code={code} onChange={this.onChange} />


          

         <div>
            {renderHTML(code)}
          </div>
          <br />
          <Button primary>Submit</Button>
        </Form>
      </div>
    );
  }
}

HtmlCoder.propTypes = {
  submit: PropTypes.func.isRequired,
  code: PropTypes.string.isRequired,
}

export default HtmlCoder;
