import { combineReducers } from 'redux';
import topics from './topics';
import currentTopic from './currentTopic';


export default combineReducers({
  topics,
  currentTopic
});
