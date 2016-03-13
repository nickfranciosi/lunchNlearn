import React from 'react';
import { connect } from 'react-redux';

const LearnList = ({ topics }) => {
  const renderTopics = (key) => {
    const topic = topics[key];
    return <li key={key}>{topic.title}</li>;
  };

  return(
    <div>
      <h2>Display all items</h2>
      <ul>
        {Object.keys(topics).map(renderTopics)}
      </ul>
    </div>
  );
};

const mapStateToProps = ({topics}) => {
  return {topics};
} ;

export default connect(mapStateToProps)(LearnList);
