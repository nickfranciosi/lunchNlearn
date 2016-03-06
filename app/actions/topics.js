let counter = 0;
import C from '../constants';

export default {
  addTopic: (topic) => {
    return {
        type: C.ADD_TOPIC,
        id: counter++,
        name: topic,
    };
  },
  assignTopic: (id) => {
    return {
        type: C.ASSIGN_SPEAKER,
        id: id,
        speaker: 'Nick Franciosi'
    };
  }
};
