import React from 'react';
import { connect } from 'react-redux';
import C from '../constants';
import { assignTopic, upVote } from '../actions';
import { Link } from 'react-router';
import moment from 'moment';

//pass context through as second param to push to route
const TopicList = ({ topics, auth, assignTopic }) => {

  if(!topics){
    return(
      <h3>Looks like no one wants to learn anything. <Link to="/">Teach us something or suggest a topic</Link></h3>
    );
  }
  const assignedTopics = (key) => {
    const topic = topics[key];
    const timeuntilLesson = topic.date ? moment(topic.date, 'X').fromNow() : <Link to={'learn/' + key}><button className='pull-right btn btn-primary'>Schedule Date</button></Link>;
    if(!topic.speaker) return;
    return <li className="list-group-item" key={key}><Link to={'learn/' +  key} >{topic.title}</Link> , {topic.speaker.username} {timeuntilLesson}</li>;
  };


  const unassignedTopics = (key) => {
    const topic = topics[key];
    if(topic.speaker) return;
    return (

      <li className="list-group-item" key={key}>
        <Link to={'/learn/' +  key} >{topic.title}</Link>
        <span>Votes: {topic.votes || 'None'}</span>
        <button className="btn btn-success pull-right" onClick={() => onVote(key)}> Vote Up</button>
        <button className="btn btn-primary pull-right" onClick={() => onAssign(key)}>Sign Up</button>
      </li>
    );
  };

  const onVote = (key) =>{
    if(auth.currently !== C.LOGGED_IN){
      alert('Log in to teach something');
    }
    upVote(key);
  };

  const onAssign = (key) =>{
    if(auth.currently !== C.LOGGED_IN){
      alert('Log in to teach something');
    }
    assignTopic(key, auth);
  };

  return(
    <div className="container">
      <div className="row">
        <div className="col-sm-6">
          <h2>Assigned</h2>
          <ul className="list-group">
            {Object.keys(topics).map(assignedTopics)}
          </ul>
        </div>
        <div className="col-sm-6" >
          <h2>Unassigned</h2>
          <ul className="list-group">
            {Object.keys(topics).map(unassignedTopics)}
          </ul>
        </div>
    </div>
    </div>
  );
};

const mapStateToProps = ({topics, auth}) => {
  return {topics, auth};
} ;

export default connect(mapStateToProps, { assignTopic })(TopicList);
