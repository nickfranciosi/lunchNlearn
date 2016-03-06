import React from 'react';

const SuggestTopic = ({addItem}) => {
    let input;
    return (
        <div>
            <input ref={node => {
                input = node;
                }} type="text"/>
            <button className="btn" onClick={() => {
                addItem(input.value);
                input.value = ' ';
                }}> AddSuggestion</button>
        </div>
    );
};

export default SuggestTopic;