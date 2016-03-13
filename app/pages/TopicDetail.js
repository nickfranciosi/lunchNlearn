import React, {Component} from 'react';
import { connect } from 'react-redux';
import { setCurrentTopic } from '../actions';


class TopicDetail extends Component {
  componentWillMount(){
    this.props.setCurrentTopic(this.props.params.id);
  }

  render(){
    return (
      <div>
        <h2>{this.props.topic.title}</h2>
        <h5>{this.props.topic.speaker}</h5>
      </div>
    );
  }
};

const mapStateToProps = (state) => {
  return {
    topic: state.currentTopic
  };
};


export default connect(mapStateToProps, { setCurrentTopic })(TopicDetail);
