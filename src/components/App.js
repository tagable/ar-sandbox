import React  from 'react';
import { Route } from 'react-router-dom';

import HomePage from './pages/HomePage';
import SignupPage from './pages/SignupPage';
import LoginPage from './pages/LoginPage';
import GuestRoute from './routes/GuestRoute';
import MyNav from './basicComp/MyNav';

const App = ({location}) => (
	<div className="container">
		<MyNav />
	  <Route location={location} path="/" exact component={HomePage} />
    <GuestRoute location={location} path="/signup" exact component={SignupPage} />
	  <GuestRoute location={location} path="/login" exact component={LoginPage} />
	</div>
);

export default App;
