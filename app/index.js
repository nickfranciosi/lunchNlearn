import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import C from './constants';

import store from './store';
import {addTopic, assignTopic} from './actions';

// components
import TopicList from './components/TopicList';
import SuggestTopic from './components/SuggestTopic';
import About from './components/About';
import Navigation from './components/Navigation';

class App extends React.Component {
   constructor(props){
       super(props);
   }

    addItem(newItem){
        store.dispatch(addTopic(newItem));
    }

    assignTopic(id){
        store.dispatch(assignTopic(id));
    }

    render(){
        return (
            <div>
                <Navigation />
                <SuggestTopic addItem={this.addItem.bind(this)}/>
                <TopicList topics={store.getState().topics} assignTopic={this.assignTopic.bind(this)}/>
            </div>
        );
    }
}

const render = () => {
    ReactDOM.render(
         <Router history={browserHistory}>
            <Route path="/" component={App}/>
            <Route path="/about" component={About}/>
        </Router>,
        document.getElementById('app'));
};

store.subscribe(render);
render();
