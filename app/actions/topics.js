let counter = 0;

export default {
  addTopic: (topic) => {
    return {
        type: 'ADD_TOPIC',
        id: counter++,
        name: topic,
    };
  },
  assignTopic: (id) => {
    return {
        type: 'ASSIGN_SPEAKER',
        id: id,
        speaker: 'Nick Franciosi'
    };
  }
};
