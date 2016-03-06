import React from 'react';
import {Route, IndexRoute} from 'react-router';
import Wrapper from './pages/wrapper';
import About from './pages/about';


export default (
 <Route path="/" component={Wrapper}>
        <Route path="/about" component={About}/>
  </Route>
);
