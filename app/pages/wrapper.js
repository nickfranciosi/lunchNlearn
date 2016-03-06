import React from 'react';
import {connect} from 'react-redux';
import {addTopic, assignTopic} from '../actions';

// components
import TopicList from './components/TopicList';
import SuggestTopic from './components/SuggestTopic';
import Navigation from './components/Navigation';

class Wrapper extends React.Component {
   constructor(props){
       super(props);
   }

    addItem(newItem){
      	this.props.dispatch(addTopic(newItem));
    }

    assignTopic(id){
      	this.props.dispatch(assignTopic(id));
    }

    render(){
        return (
            <div>
                <Navigation />
                <SuggestTopic addItem={this.addItem.bind(this)}/>
                <TopicList topics={this.props.topics} assignTopic={this.assignTopic.bind(this)}/>
            </div>
        );
    }
}
const mapStateToProps = (state) => {
  return {
    topics: state.topics
  };
};


export default Wrapper = connect(mapStateToProps)(Wrapper);;
