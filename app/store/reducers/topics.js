
import C from '../../constants';

export default (state = [], action) => {
    switch(action.type){
        case C.ADD_TOPIC:
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

            return [newTopic, ...state];
        case C.ASSIGN_SPEAKER:
            return state.map(topic => {
               if(topic.id !== action.id) return topic;
               return Object.assign({}, topic, {
                    assigned: true,
                    speaker: action.speaker
                });
            });
        default:
            return state;
    }
};