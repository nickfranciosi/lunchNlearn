import React from 'react';
import ReactDOM from 'react-dom';

import store from './stores/TopicStore';


console.log(store.getState());
store.dispatch({type: 'INCREMENT'});
console.log(store.getState());
// components
import TopicList from './components/TopicList';
import SuggestTopic from './components/SuggestTopic';

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
            speaker: null,
            assigned: false,
            completed: false
        });
    }
    
    assignToMe(id){
        console.log('id:', id);
        store.dispatch({
            type: 'ASSIGN_SPEAKER',
            id: id,
            speaker: 'Nick Franciosi'
        });
    }
    
    render(){
        return (
            <div>
                <SuggestTopic addItem={this.addItem.bind(this)}/>
                <TopicList topics={store.getState()} assignToMe={this.assignToMe.bind(this)}/>
            </div>
        );
    }
}

const render = () => {
    ReactDOM.render(<App />, document.getElementById('app'));    
};

store.subscribe(render);
render();

