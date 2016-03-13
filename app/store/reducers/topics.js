
import C from '../../constants';

export default (state = [], action) => {
    switch(action.type){
        case C.RECEIVE_TOPICS_DATA:
          console.log(action);
          return action.data;
        case C.ADD_TOPIC:
            console.log(action);
             const emptyTopic = {
                speaker: null,
                assigned: false,
                date: null,
                completed: false
            };
            let newTopic = Object.assign(emptyTopic,{
                id: action.id,
                title: action.title
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
