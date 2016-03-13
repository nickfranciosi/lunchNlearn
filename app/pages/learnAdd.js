import React from 'react';
import { connect } from 'react-redux';
import { addTopic } from '../actions';

const LearnAdd = ({addTopic}) => {
  return(
    <div>
      <h2>Display forms to add items</h2>
      <button onClick={() => addTopic({title: 'redux', speaker: 'Nick Franciosi'})}>Add Topic</button>
    </div>
  );
};


export default connect(null,{addTopic})(LearnAdd);
