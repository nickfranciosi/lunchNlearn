import topicActions from './topics';
import currentTopic from './currentTopic';
import authActions from './auth';

module.exports = Object.assign({},topicActions, currentTopic, authActions);
