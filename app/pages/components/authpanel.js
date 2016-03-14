import React, {Component} from 'react';
import { connect } from 'react-redux';
import {attemptLogin, logoutUser} from '../../actions';
import C from '../../constants';
import { Link } from 'react-router';

class Authpanel extends Component{
	render(){
		let p = this.props;
		let {auth} = this.props;
		switch(auth.currently){
			case C.LOGGED_IN: return (
				<div className="authpanel">
					<span>Logged in as {auth.username}.</span>
					{' '}<button onClick={p.logoutUser}>Log out</button>
				</div>
			);
			case C.AWAITING_AUTH_RESPONSE: return (
				<div className="authpanel">
					<button disabled> authenticating...</button>
				</div>
			);
			default: return (
				<div className="authpanel">
					<button onClick={p.attemptLogin}>Log in</button>
				</div>
			);
		}
	}
};


const mapStateToProps = (state) =>{
	return {auth:state.auth};
};

export default connect(mapStateToProps,{attemptLogin, logoutUser})(Authpanel);
