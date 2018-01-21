/*************************************
 * Name: Roman Alshehri
 *
 * Desc: CodePage
 *
 **************************************/

import React, {Component} from 'react';
import { connect } from 'react-redux';
import { List } from 'semantic-ui-react';
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
          return <CodeListTitlePage key={index} codes={val}/>
        })}
      </List>
      
    </div>);
  }
}

CodePage.propTypes = {
  
}

function mapStateToProps(state) {
	return {
		coderList: state.coderList
	}
}

export default connect(mapStateToProps, { loadCoderList })(CodePage);
