import { createStore } from 'redux';

const TopicStore = (state = [], action) => {
    switch(action.type){
        case 'ADD_TOPIC':
            return [...state, {
                id: action.id,
                name: action.name,
                speaker: null,
                assigned: false,
                completed: false
            }];
        case 'ASSIGN_SPEAKER':
            return state.map(topic => {
                if(topic.id !== action.id) return topic;
                topic.assigned = true;
                topic.speaker = action.speaker;
                return topic;
            })
        default:
            return state;
    }
    
};


const store = createStore(TopicStore);


export default store;