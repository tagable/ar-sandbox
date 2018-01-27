import React from 'react';
import {Route} from 'react-router-dom';
import {Container} from 'semantic-ui-react'

import HomePage from './pages/HomePage';
import SignupPage from './pages/SignupPage';
import LoginPage from './pages/LoginPage';
import ForgetPasswordPage from './pages/ForgetPasswordPage';
import ConfirmationPage from './pages/ConfirmationPage';
import ResetPasswordPage from './pages/ResetPasswordPage';
import CodePage from './pages/CodePage';
import CodeInfoPage from './pages/coder/CodeInfoPage';
import GuestRoute from './routes/GuestRoute';
import UserRoute from './routes/UserRoute';
import MyNav from './basicComp/MyNav';

const App = ({location}) => (
<div className="App">
  <MyNav/>
  <Route location={location} path="/" exact component={HomePage} />
  <GuestRoute location={location} path="/signup" exact component={SignupPage} />
  <GuestRoute location={location} path="/login" exact component={LoginPage} />
  <GuestRoute location={location} path="/forget_password" exact component={ForgetPasswordPage} />
  <GuestRoute location={location} path="/confirmation/:token" exact component={ConfirmationPage} />
  <GuestRoute location={location} path="/reset_password/:token" exact component={ResetPasswordPage} />
  <UserRoute location={location} path="/code-list" exact component={CodePage} />
  <UserRoute location={location} path="/code-info/:groupId/:titleId" exact component={CodeInfoPage} />

  <Container fluid className="footer">
    <center>Footer</center>
  </Container>
</div>);

export default App;
