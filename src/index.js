import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import  { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import decode from 'jwt-decode';
import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducer from './reducers';

import 'semantic-ui-css/semantic.min.css';
import './styles/index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import setAuthorizationHeader from './utils/setAuthorizationHeader';
import { userLoggedIn } from './actions/auth';

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));


if (localStorage.arabsandboxJWT) {
  const payload = decode(localStorage.arabsandboxJWT);
  const user = {
    token: localStorage.arabsandboxJWT,
    username: payload.username,
    _id: payload._id,
    email: payload.email,
    confirmed: payload.confirmed
  };
  setAuthorizationHeader(localStorage.arabsandboxJWT);
  store.dispatch(userLoggedIn(user));
}
ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}>
            <Route component={App} />
        </Provider>
    </BrowserRouter>
    ,document.getElementById('root'));
registerServiceWorker();
