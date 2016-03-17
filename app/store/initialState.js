import C from '../constants';
export default {
  topics : {},
  auth: {
		currently: C.ANONYMOUS,
		username: null,
		uid: null
	},
  currentTopic : {
    title: null,
    description: null,
    assigned: null,
    date: null,
    speaker: null
  }
};
