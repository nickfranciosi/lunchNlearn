import React, {PropTypes} from 'react';
import { connect } from 'react-redux';
import { addTopic } from '../actions';
import C from '../constants';

const TopicAdd = ({addTopic, auth}, {router}) => {
 let learnInput;
 let teachInput;

 const teachSubmit = (e) => {
   e.preventDefault();
   if(auth.currently !== C.LOGGED_IN){
     alert('Log in to teach');
     return;
   }
   handleSubmit(teachInput.value, auth.username);
 };

 const learnSubmit = (e) => {
   e.preventDefault();
   handleSubmit(learnInput.value);
 };

  const handleSubmit = (topic, speaker = null) => {
    //add new topic and pass a callback to route to new page
    addTopic({title: topic, speaker: speaker}, (key) => {
      router.push('/learn/' + key);
    });

  };

  return(
    <div className="flex-container">
      <div className="left-half">
        <form onSubmit={learnSubmit}>
          <label>I want to learn</label>
          <input ref={ref => {
              learnInput = ref;
            }} type="text"/>
        </form>
      </div>
      <div className="right-half">
        <form onSubmit={teachSubmit}>
          <label>I want to teach</label>
          <input ref={ref => {
              teachInput = ref;
            }} type="text"/>
        </form>
      </div>
    </div>
  );
};
//bind router context to push routes programatically
TopicAdd.contextTypes = {router: PropTypes.object};

const mapStateToProps = ({auth}) => {return {auth};};

export default connect(mapStateToProps,{addTopic})(TopicAdd);
