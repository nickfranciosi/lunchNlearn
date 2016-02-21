import React, {Component} from 'react';

import TopicItem from './TopicItem';

class TopicList extends Component {
    getItems() {
        return  this.props.topics;
    }
    render(){
        const items = this.getItems().map(item => {
            return <TopicItem key={item.id} {...item} />;
        });

        return (    
            <div>
                {items}
            </div>
        );
    };
}

export default TopicList;