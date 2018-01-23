import React, { Component } from 'react'
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import { Container, Segment } from 'semantic-ui-react'
import {loadCoderInfo, submitCode} from '../../../actions/coders';
import CodeInfoForm from '../../forms/CodeInfoForm';

export class CodeInfoPage extends Component {
  state = {
    data: {
      groupId: this.props.match.params.groupId,
      titleId: this.props.match.params.titleId, 
      token: localStorage.arabsandboxJWT,
    },
  }
  componentDidMount() {
    this.props.loadCoderInfo(this.state.data)
  }

  submit = (myCode) => {
    const data = {
      token: this.state.data.token,
      code: myCode,
      codeId: this.props.coder._id
    }

    return this.props.submitCode(data)
      // .then(res => console.log("res", res))
      // .catch(res => res)
  }



  render() {
    return (
      <Container>
        <h1>CodeInfoPage</h1>
        <h3>{this.props.coder.title}</h3>
        <Segment>{this.props.coder.desc}</Segment>
        <CodeInfoForm 
          submit={this.submit}
          code={this.props.coder.code || ""}
        />
      </Container>
    )
  }
}

CodeInfoPage.propTypes = {
  submitCode: PropTypes.func.isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      groupId: PropTypes.string.isRequired,
      titleId: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,

  coder: PropTypes.shape({
    code: PropTypes.string,
    _id: PropTypes.string,
    updatedAt: PropTypes.string,
    createdAt: PropTypes.string,
    userId: PropTypes.string,
    titleId: 0,
    groupId: 0,
    title: PropTypes.string,
    desc: PropTypes.string,
    result: PropTypes.string,   
  }).isRequired,
}

function mapStateToProps(state) {
  return {
    coder: state.coder,
  }
}

export default connect(mapStateToProps, {loadCoderInfo, submitCode})(CodeInfoPage);
