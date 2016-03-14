import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import { Router, Route, browserHistory } from 'react-router';


import routes from './routes';
import store from './store';
import actions from './actions';

//injects store into all our container components
ReactDOM.render(
         <Provider store={store} >
           <Router routes={routes} history={browserHistory}/>
        </Provider>,
        document.getElementById('app'));


// setup Firebase listeners
setTimeout(function(){
  store.dispatch( actions.startListeningToAuth() );
	store.dispatch( actions.startListeningToTopics() );
});
