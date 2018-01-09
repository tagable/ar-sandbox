import React  from 'react';
import { Route } from 'react-router-dom';

import HomePage from './pages/HomePage';
import '../App.css';

const App = ({location}) => (
    <div className="App">
        <div className="container">
            <Route location={location} path="/" component={HomePage} />
        </div>
    </div>
);

export default App;
