import React from 'react';
import { connect } from 'react-redux';

//pass context through as second param to push to route
const LearnList = ({ topics }) => {
  const assignedTopics = (key) => {
    const topic = topics[key];
    if(!topic.speaker) return;
    return <li key={key}>{topic.title} , {topic.speaker}</li>;
  };

  const unassignedTopics = (key) => {
    const topic = topics[key];
    if(topic.speaker) return;
    return <li key={key}>{topic.title}, Sign Up, Vote Up</li>;
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

export default connect(mapStateToProps)(LearnList);
