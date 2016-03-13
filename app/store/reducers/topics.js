
import C from '../../constants';

export default (state = [], action) => {
    switch(action.type){
        case C.RECEIVE_TOPICS_DATA:
          return action.data;
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
