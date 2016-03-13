import React from 'react';
import { connect } from 'react-redux';
import { assignTopic } from '../actions';
import { Link } from 'react-router';

//pass context through as second param to push to route
const LearnList = ({ topics, assignTopic }) => {

  if(!topics){
    return(
      <h3>Looks like noone wants to learn anything. <Link to="/">Teach us something or suggest a topic</Link></h3>
    );
  }
  const assignedTopics = (key) => {
    const topic = topics[key];
    if(!topic.speaker) return;
    return <li key={key}>{topic.title} , {topic.speaker}</li>;
  };

  const unassignedTopics = (key) => {
    const topic = topics[key];
    if(topic.speaker) return;
    return (
      <li key={key}>
        {topic.title}
        <button className="btn btn-success"> Vote Up</button>
        <button className="btn btn-primary" onClick={() => assignTopic(key)}>Sign Up</button>
      </li>
    );
  };

  return(
    <div className="container">
      <div className="row">
        <div className="col-sm-6">
          <h2>Assigned</h2>
          <ul>
            {Object.keys(topics).map(assignedTopics)}
          </ul>
        </div>
        <div className="col-sm-6" >
          <h2>Unassigned</h2>
          <ul>
            {Object.keys(topics).map(unassignedTopics)}
          </ul>
        </div>
    </div>
    </div>
  );
};

const mapStateToProps = ({topics}) => {
  return {topics};
} ;

export default connect(mapStateToProps, { assignTopic })(LearnList);
