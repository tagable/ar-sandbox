import React, {Component} from 'react';
import { List } from 'semantic-ui-react';


class CodeListDataPage extends Component {
  state = {};

  render() {
  	const { data } = this.props;

    return (
      <List divided verticalAlign='middle'>
      	{data && data.map((val, i) => {
		  		return <List.Item key={i}>
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