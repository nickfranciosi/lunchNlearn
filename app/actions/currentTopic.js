import C from '../constants';

export default {
  setCurrentTopic: (id) => {
    return (dispatch, getState) => {
      const { topics } = getState();
      dispatch({
        type: C.SET_CURRENT_TOPIC,
        payload: topics[id]
      });
    };
    // return {
    //   type: C.SET_CURRENT_TOPIC,
    //   payload: {title: 'Loaded Topic'}
    // };
  }
};
