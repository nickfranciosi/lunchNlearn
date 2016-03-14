import C from '../constants';
import Firebase from 'firebase';
const topicsRef = new Firebase(C.FIREBASE).child('topics');

export default {
  setCurrentTopic: (id) => {
    return (dispatch, getState) => {
      topicsRef.child(id).on("value",function(snapshot){
        dispatch({
          type: C.SET_CURRENT_TOPIC,
          id: id,
          payload: Object.assign({}, snapshot.val(), {id: id})
        });
			});

    };
  }
};
