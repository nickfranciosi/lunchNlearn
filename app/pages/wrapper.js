import React from 'react';
import {connect} from 'react-redux';
import {addTopic, assignTopic} from '../actions';

// components
import TopicList from './components/TopicList';
import SuggestTopic from './components/SuggestTopic';
import Navigation from './components/Navigation';

class Wrapper extends React.Component {

    render(){
        return (
            <div>
                <Navigation />
                {this.props.children}
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
