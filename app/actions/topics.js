let counter = 0;
import C from '../constants';
import Firebase from 'firebase';
const topicsRef = new Firebase(C.FIREBASE).child('topics');

export default {
  startListeningToTopics: () => {
		return function(dispatch,getState){
			topicsRef.on("value",function(snapshot){
				dispatch({ type: C.RECEIVE_TOPICS_DATA, data: snapshot.val() });
			});
		};
	},
  addTopic: (topic) => {
    return (dispatch, getStore) => {
      topicsRef.push(topic, (error) => {
        if(!error){
          dispatch({type: C.ADD_TOPIC, id: counter++, title: topic.title});
        }
      });
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
