import { combineReducers } from 'redux';
import topics from './topics';
import currentTopic from './currentTopic';
import auth from './auth';


export default combineReducers({
  topics,
  currentTopic,
  auth
});
