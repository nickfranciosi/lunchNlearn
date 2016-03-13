import React, {PropTypes} from 'react';
import { connect } from 'react-redux';
import { addTopic } from '../actions';

const LearnAdd = ({addTopic}, {router}) => {
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
    router.push('/learn');
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
LearnAdd.contextTypes = {router: PropTypes.object};

export default connect(null,{addTopic})(LearnAdd);
