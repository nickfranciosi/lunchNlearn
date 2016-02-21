import React from 'react';
import ReactDOM from 'react-dom';

// components
import TopicList from './components/TopicList';
import SuggestTopic from './components/SuggestTopic';

class App extends React.Component {
   constructor(props){
       super(props);
       this.state = {items: [
            {
                id: 0,
                name: 'Git',
                speaker: 'Nick Franciosi',
                assigned: true,
                completed: true
            },
            {
                id: 1,
                name: 'Security',
                speaker: 'Randy Uebel',
                assigned: true,
                completed: false
            },
            {
                id: 2,
                name: 'SQL',
                speaker: null,
                assigned: false,
                completed: true
            }
    ]};
    this.counter = 3;
   }
   
    addItem(newItem){
        console.log(newItem);
        var item = {
            id: this.counter++,
            name: newItem,
            speaker: null,
            assigned: false,
            completed: false
        };
        
        var newItems = this.state.items.concat(item);
        
        this.setState({items: newItems});
    }
    
    assignToMe(id){
        var newItems = this.state.items.map(item => {
            if (item.id !== id) return item;
            item.assigned = true;
            item.speaker = 'Nick Franciosi';
            return item;
        });
       
       this.setState({items: newItems});
    }
    
    render(){
        return (
            <div>
                <SuggestTopic addItem={this.addItem.bind(this)}/>
                <TopicList topics={this.state.items} assignToMe={this.assignToMe.bind(this)}/>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
