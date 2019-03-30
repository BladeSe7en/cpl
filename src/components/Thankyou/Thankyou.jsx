import React, { Component } from 'react';
import Navbar from '../Navbar/Navbar';

class Thankyou extends Component{
	constructor(props){
		super(props)
	}

	render(){
		return (
			<div>
				<Navbar />
					<div id='confirmation'>
						<h1>hi</h1>
					</div>
			</div>
		)
	}
}

export default Thankyou;
