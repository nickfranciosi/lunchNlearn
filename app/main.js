import React from 'react';
import ReactDOM from 'react-dom';

// components
import TopicList from './components/TopicList';
import SuggestTopic from './components/SuggestTopic';

class App extends React.Component {
    render(){
        return (
            <div>
                <SuggestTopic />
                <TopicList />
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
