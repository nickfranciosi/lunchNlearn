import C from '../constants';
import Firebase from 'firebase';
const topicsRef = new Firebase(C.FIREBASE).child('topics');

export default {
  startListeningToTopics: () => {
		return function(dispatch,getState){
			topicsRef.orderByChild('date').on("value",function(snapshot){
				dispatch({ type: C.RECEIVE_TOPICS_DATA, data: snapshot.val() });
			});
		};
	},
  addTopic: (topic) => {
    return (dispatch, getStore) => {
      topicsRef.push(topic, (error) => {
        if(!error){
          dispatch({type: C.ADD_TOPIC, title: topic.title});
        }
      });
    };
  },
  assignTopic: (id, speaker) => {
    return (dispatch, getStore) => {
      topicsRef.child(id).update({ speaker }, (error) => {
          if(!error){
            dispatch({type: C.ASSIGN_TOPIC});
          }
      });
    };
  },
  assignDate: (id, date) => {
    return (dispatch, getStore) => {
      topicsRef.child(id).update({ date }, (error) => {
          if(!error){
            dispatch({type: C.ASSIGN_DATE});
          }
      });
    };
  }
};
