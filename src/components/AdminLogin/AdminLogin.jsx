// this component can be scrapped. Instead of using a seperate email login for the admins I wanted to use the same steam-login functions found in the
// forumMain component and server.js. However, the middleware used in steam-login will need to be rewritten to handle a member login and redicrect to forumMain when you 
// click on the login button in forumMain. and then run sperate code to handle an admin login and redirect to the admin dashboard when you click on the admin button found 
// in the navbar component. I have tried duplicating and renaming the functions for the admins login but I couldnt get the middleware to redirct to the desired admin 
// dashboard while the forum login redirected to the forumMain.

// Related to the login functions I wanted to add roles for members and admins to limit access to the app. and upon a successful player or admin login the code should
// generate an accessToken. this accessToken should then replace every instance of accessToken that is currently hardcoded in the action files.



import React, { Component } from 'react';
import { Redirect } from 'react-router';
import { updateUsername, updatePassword, checkToken, rememberMe } from './AdminLoginActions';
import Navbar from '../Navbar/Navbar';

class AdminLogin extends Component {
	constructor(props) {
		super(props);

		this.handlePassword = this.handlePassword.bind(this);
		this.handleRemember = this.handleRemember.bind(this);
		this.handleUsername = this.handleUsername.bind(this);
		//this.submitLogin    = this.submitLogin   .bind(this);
	}

	componentDidMount() {
		const { dispatch, accessToken } = this.props;
		dispatch(checkToken(accessToken));
	}

	componentDidUpdate() {
		const { dispatch, accessToken } = this.props;
		dispatch(checkToken(accessToken));
	}

	handleUsername(e) {
		const { dispatch } = this.props;
		dispatch(updateUsername(e.target.value));
	}

	handlePassword(e) {
		const { dispatch } = this.props;
		dispatch(updatePassword(e.target.value))
	}

	handleRemember(e) {
		const { dispatch } = this.props;
		let checked;
		e.target.checked ? checked = true : checked = false;
		dispatch(rememberMe(checked));
	}

	render() {
		const { username, password, authorized } = this.props;
		if (authorized) return <Redirect push to='/Admin/Meetups' />
		return (
			<div id='admin-top-div'>
				<Navbar />
				<div className='signUp-container'>
					<div className='form-container login'>
						<form onSubmit={this.submitLogin}>
							<h3>SDJS Admin Login</h3>
							<div className="container">
								<label htmlFor="username"><b>Username</b></label>
								<input type="text" placeholder="Username" id='username' name="username" value={username} onChange={this.handleUsername} required />
								<label htmlFor="password"><b>Password</b></label>
								<input type="password" placeholder="Password" id='password' name="password" value={password} onChange={this.handlePassword} required />
								<button type="submit" id='submit' className='btn'>Login</button>
								<label id='remember'>
									<input type="checkbox" name="remember" onChange={this.handleRemember} /> Remember me
								</label>
							</div>
						</form>
					</div>
				</div>
			</div>
		)
	}
}

export default AdminLogin;
