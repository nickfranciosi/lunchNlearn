import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';

import store from './stores/TopicStore';

// components
import TopicList from './components/TopicList';
import SuggestTopic from './components/SuggestTopic';
import About from './components/About';
import Navigation from './components/Navigation';

class App extends React.Component {
   constructor(props){
       super(props);
       this.counter = 0;
   }
   
    addItem(newItem){     
        store.dispatch({
            type: 'ADD_TOPIC',
            id: this.counter++,
            name: newItem,
        });
    }
    
    assignTopic(id){
        store.dispatch({
            type: 'ASSIGN_SPEAKER',
            id: id,
            speaker: 'Nick Franciosi'
        });
    }
    
    render(){
        return (
            <div>
                <Navigation />
                <SuggestTopic addItem={this.addItem.bind(this)}/>
                <TopicList topics={store.getState()} assignTopic={this.assignTopic.bind(this)}/>
            </div>
        );
    }
}

const render = () => {
    ReactDOM.render(
         <Router history={hashHistory}>
            <Route path="/" component={App}/>
            <Route path="/about" component={About}/>
        </Router>, 
        document.getElementById('app'));    
};

store.subscribe(render);
render();

