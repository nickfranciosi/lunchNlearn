import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import { Router, Route, browserHistory } from 'react-router';

import routes from './routes';
import store from './store';

const render = () => {
    ReactDOM.render(
         <Provider store={store} >
           <Router routes={routes} history={browserHistory}/>
        </Provider>,
        document.getElementById('app'));
};

store.subscribe(render);
render();
