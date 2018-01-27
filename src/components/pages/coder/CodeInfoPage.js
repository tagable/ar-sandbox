import React, { Component } from 'react'
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import { Container, Segment } from 'semantic-ui-react'
import {loadCoderInfo, submitCode, clearCodeObj} from '../../../actions/coders';
import CoderTag from '../../../utils/selectCoderTag';


export class CodeInfoPage extends Component {
  state = {
    data: {
      groupId: this.props.match.params.groupId,
      titleId: this.props.match.params.titleId,
      token: localStorage.arabsandboxJWT,
    },
    loading: true
  }
  componentDidMount() {
    this.setState({
      loading: false
    })
    this.props.clearCodeObj();
    this.props.loadCoderInfo(this.state.data).then(() => {
      this.setState({loading: true})
    })
  }

  submit = (myCode) => {
    const data = {
      token: this.state.data.token,
      code: myCode,
      codeId: this.props.coder._id
    }

    return this.props.submitCode(data);
  }

  render() {
    const {loading} = this.state;
    // console.log("CodeInfoPage", this.props);
    return (
      <Container>
        <h1>CodeInfoPage</h1>
        

        <Segment>{CoderTag(this.props, this.submit)}</Segment>
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
  clearCodeObj: PropTypes.func.isRequired,
}

function mapStateToProps(state) {
  return {
    coder: state.coder,
  }
}

export default connect(mapStateToProps, {loadCoderInfo, submitCode, clearCodeObj})(CodeInfoPage);
