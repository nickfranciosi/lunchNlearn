import React, {Component} from 'react';

import TopicItem from './TopicItem';

const TopicList = (props) => {
   
    let items = props.topics.map(item => {
        return <TopicItem key={item.id} {...item} assignToMe={props.assignToMe}/>;
    });

    return (    
        <div>
            {items}
        </div>
    );
};

export default TopicList;