import React from 'react';
import { connect } from 'react-redux';
import { assignTopic } from '../actions';
import { Link } from 'react-router';
import moment from 'moment';

//pass context through as second param to push to route
const LearnList = ({ topics, assignTopic }) => {

  if(!topics){
    return(
      <h3>Looks like noone wants to learn anything. <Link to="/">Teach us something or suggest a topic</Link></h3>
    );
  }
  const assignedTopics = (key) => {
    const topic = topics[key];
    const timeuntilLesson = topic.date ? moment(topic.date, 'X').fromNow() : 'No Date Assigned Yet';
    if(!topic.speaker) return;
    return <li key={key}><Link to={'learn/' +  key} >{topic.title}</Link> , {topic.speaker} {timeuntilLesson}</li>;
  };

  const unassignedTopics = (key) => {
    const topic = topics[key];
    if(topic.speaker) return;
    return (

      <li key={key}>
        <Link to={'/learn/' +  key} >{topic.title}</Link>
        <button className="btn btn-success"> Vote Up</button>
        <button className="btn btn-primary" onClick={() => assignTopic(key, 'Blake')}>Sign Up</button>
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
