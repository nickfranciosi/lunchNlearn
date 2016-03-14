import React from 'react';
import { Route, IndexRoute } from 'react-router';
import Wrapper from './pages/wrapper';
import About from './pages/about';
import TopicList from './pages/TopicList';
import TopicAdd from './pages/TopicAdd';
import TopicDetail from './pages/TopicDetail';


export default (
 <Route path="/" component={Wrapper}>
    <IndexRoute component={TopicAdd} />
    <Route path="/about" component={About}/>
    <Route path="/learn" component={TopicList} />
    <Route path="/learn/:id" component={TopicDetail} />
  </Route>
);
