import React, { Component } from 'react'
import {connect} from 'react-redux';
import {loadCoderInfo} from '../../../actions/coders';

export class CodeInfoPage extends Component {
  state = {
    data: {
      groupId: this.props.match.params.groupId,
      titleId: this.props.match.params.titleId, 
      token: localStorage.arabsandboxJWT
    }
  }

  componentDidMount() {
    this.props.loadCoderInfo(this.state.data)
  }

  render() {
    return (
      <div>
        <h1>CodeInfoPage</h1>
        <ul>
          <li>{this.props.coder.title}</li>
          <li>{this.props.coder.desc}</li>
          
        </ul>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    coder: state.coder
  }
}

export default connect(mapStateToProps, {loadCoderInfo})(CodeInfoPage);
