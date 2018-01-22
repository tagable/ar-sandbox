import React from 'react';
import { List } from 'semantic-ui-react';
import CodeListDataPage from './CodeListDataPage';

const CodeListTitlePage = ({ codes, id }) => (
	<List.Item>
		<List.Content>
        <List.Header>{codes.title}</List.Header>
        <CodeListDataPage data={codes.data} id={id}/> 
      </List.Content>	
	</List.Item>
);

export default CodeListTitlePage;