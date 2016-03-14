import React from 'react';
import { connect } from 'react-redux';
import {attemptLogin, logoutUser} from '../../actions';
import C from '../../constants';
import { Link } from 'react-router';

var Authpanel = React.createClass({
	render: function(){
		var p = this.props, auth = p.auth;
		switch(auth.currently){
			case C.LOGGED_IN: return (
				<div className="authpanel">
					<span>Logged in as {auth.username}.</span>
					{' '}<button onClick={p.logoutUser}>Log out</button>
				</div>
			);
			case C.AWAITING_AUTH_RESPONSE: return (
				<div className="authpanel">
					<button disabled><i className="fa fa-spinner fa-spin"></i> authenticating...</button>
				</div>
			);
			default: return (
				<div className="authpanel">
					<button onClick={p.attemptLogin}>Log in</button>
				</div>
			);
		}
	}
});

// now we connect the component to the Redux store:

var mapStateToProps = function(state){
	console.log(state);
	// This component will have access to `appState.auth` through `this.props.auth`
	return {auth:state.auth};
};

export default connect(mapStateToProps,{attemptLogin, logoutUser})(Authpanel);
