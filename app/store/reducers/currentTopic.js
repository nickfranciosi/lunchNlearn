import C from '../../constants';

const currentTopic = (state = {}, action) => {
  switch (action.type) {
    case C.SET_CURRENT_TOPIC:
      return action.payload;
      break;
    default:
    return state;
  }
};

export default currentTopic;
