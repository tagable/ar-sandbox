import React from 'react';
import { List } from 'semantic-ui-react';
import CodeListDataPage from './CodeListDataPage';

const CodeListTitlePage = ({ codes }) => (
	<List.Item>
		<List.Content>
        <List.Header>{codes.title}</List.Header>
        <CodeListDataPage data={codes.data}/> 
      </List.Content>	
	</List.Item>
);

export default CodeListTitlePage;