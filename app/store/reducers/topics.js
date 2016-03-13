
import C from '../../constants';

export default (state = [], action) => {
    switch(action.type){
        case C.RECEIVE_TOPICS_DATA:
          return action.data;
        default:
            return state;
    }
};
