import React from 'react';

const TopicItem = ({id, name, speaker, assignTopic}) => {
    return (<div>
            <h3>{name}</h3>
            <p>Speaker: {speaker}</p>
            <button className="btn" onClick={() => {
                assignTopic(id);
            }}>Assign To Me</button>
           </div>
    );
}; 

export default TopicItem;