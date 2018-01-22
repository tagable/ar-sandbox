import React, {Component} from 'react';
import { List } from 'semantic-ui-react';
import { Link } from 'react-router-dom';


class CodeListDataPage extends Component {
  state = {};
	
	urlString(groupId, titleId){
		return `/code-info/${groupId}/${titleId}`;
	}

  render() {
  	const { data, id } = this.props;
    return (
      <List divided verticalAlign='middle'>
      	{data && data.map((val, i) => {
		  		return <List.Item key={i} as={Link} to={this.urlString(id, i)} >
					    			<List.Content floated='right'>
				    	        <List.Header>Done</List.Header>
				    	      </List.Content>	
				    	     	{val.title}
					    		</List.Item>
		  	})}
      </List>
    );
  }
}

export default CodeListDataPage;