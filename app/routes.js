import React from 'react';
import { Route, IndexRoute } from 'react-router';
import Wrapper from './pages/wrapper';
import About from './pages/about';
import LearnList from './pages/learnList';
import LearnAdd from './pages/learnAdd';
import TopicDetail from './pages/TopicDetail';


export default (
 <Route path="/" component={Wrapper}>
    <IndexRoute component={LearnAdd} />
    <Route path="/about" component={About}/>
    <Route path="/learn" component={LearnList} />
    <Route path="/learn/:id" component={TopicDetail} />
  </Route>
);
