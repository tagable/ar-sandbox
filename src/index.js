import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import  { Provider } from 'react-redux';
import thunk from 'redux-thunk';
// import decode from 'jwt-decode';
import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducer from './reducers';

import './styles/index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}>
            <Route component={App} />
        </Provider>
    </BrowserRouter>
    ,document.getElementById('root'));
registerServiceWorker();
