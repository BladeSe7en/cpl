import React, { Component } from 'react';
import { Field } from 'react-redux-form';
import { Redirect } from 'react-router';

import Navbar from '../Navbar/Navbar';

class SignUp extends Component {
	constructor(props) {
		super(props);
	}

	render() {
			return (
				<div>
					<Navbar />
					<div className='signUp-container'>
						<h1> hi </h1>
					</div>
				</div>

			)
	}
}

export default SignUp;
