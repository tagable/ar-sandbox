/*************************************
 * Name: Roman Alshehri
 *
 * Desc: CodePage
 *
 **************************************/

import React, {Component} from 'react';
import { connect } from 'react-redux';
import { List } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import CodeListTitlePage from './coder/CodeListTitlePage';
import { loadCoderList } from '../../actions/coders';

class CodePage extends Component {
  submit = (data) => this.props.signup(data).then(() => this.props.history.push("/"));
  
  componentDidMount(){
    this.props.loadCoderList()
  }

  render() {
    return (<div>
      <h1>Code List Page</h1>
      <List celled>
      	{this.props.coderList && this.props.coderList.map((val, index) => {
          return <CodeListTitlePage key={index} codes={val} id={index}/>
        })}
      </List>
      
    </div>);
  }
}

CodePage.propTypes = {
  loadCoderList: PropTypes.func.isRequired,
}

function mapStateToProps(state) {
	return {
		coderList: state.coderList
	}
}

export default connect(mapStateToProps, { loadCoderList })(CodePage);
