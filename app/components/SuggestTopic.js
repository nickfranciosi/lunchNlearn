import React, {Component} from 'react';

class SuggestTopic extends Component {
    render(){
        return (
            <div>
                    <input ref={node => {
                        this.input = node;
                     }} type="text"/>
                    <button onClick={() => {
                        this.props.addItem(this.input.value);
                     }}> AddSuggestion</button>
            </div>
        );
    };
}

export default SuggestTopic;