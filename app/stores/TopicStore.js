import { createStore } from 'redux';

const TopicStore = (state = [], action) => {
    switch(action.type){
        case 'ADD_TOPIC':
             const emptyTopic = {
                speaker: null,
                assigned: false,
                date: null,
                completed: false
            };
            let newTopic = Object.assign(emptyTopic,{
                id: action.id,
                name: action.name
            });
            
            return [...state, newTopic];
        case 'ASSIGN_SPEAKER':
            return state.map(topic => {
                if(topic.id !== action.id) return topic;
                topic.assigned = true;
                topic.speaker = action.speaker;
                return topic;
            });
        default:
            return state;
    }
    
};


const store = createStore(TopicStore);


export default store;