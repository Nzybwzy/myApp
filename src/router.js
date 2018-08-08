import React from 'react';
import { Router, Route } from 'dva/router';

import MainContainer from './components/MainContainer';


function RouterConfig({ history }) {
    return (
        <Router history={history}>
            <Route path="/" component={MainContainer}>
               
            </Route>
        </Router>
    );
}

export default RouterConfig;
