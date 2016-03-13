import React from 'react';
import { connect } from 'react-redux';
import { addTopic } from '../actions';

const LearnAdd = ({addTopic}) => {
 let learnInput;
 let teachInput;

 const teachSubmit = (e) => {
   e.preventDefault();
   handleSubmit(teachInput.value, 'Nick Franciosi');
 };

 const learnSubmit = (e) => {
   e.preventDefault();
   handleSubmit(learnInput.value);
 };

  const handleSubmit = (topic, speaker = null) => {
    addTopic({title: topic, speaker: speaker});
  };

  return(
    <div>
      <form onSubmit={learnSubmit}>
        <label>I want to learn</label>
        <input ref={ref => {
            learnInput = ref;
          }} type="text"/>
      </form>
      <form onSubmit={teachSubmit}>
        <label>I want to teach</label>
        <input ref={ref => {
            teachInput = ref;
          }} type="text"/>
      </form>
    </div>
  );
};


export default connect(null,{addTopic})(LearnAdd);
