import React from 'react';

const TopicItem = ({name, speaker}) => {
    return (<div>
            <h3>{name}</h3>
            <p>Speaker: {speaker}</p>
            <button >Assign To Me</button>
           </div>
    );
}; 

export default TopicItem;