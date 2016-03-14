import C from '../../constants';

export default function(currentstate = {},action){
	switch(action.type){
		case C.ATTEMPTING_LOGIN:
			console.log('what up attempting');
			return {
				currently: C.AWAITING_AUTH_RESPONSE,
				username: "guest",
				uid: null
			};
		case C.LOGOUT:
			return {
				currently: C.ANONYMOUS,
				username: "guest",
				uid: null
			};
		case C.LOGIN_USER:
		console.log('what up login');
			return {
				currently: C.LOGGED_IN,
				username: action.username,
				uid: action.uid
			};
		default: return currentstate;
	}
};
