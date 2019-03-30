import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';

class Home extends Component {
    constructor(props) {
        super(props);
	}

	render() {
		return (
			<div>
				<Navbar />
				<div className='banner'>
					<h1>Civiliation Players League</h1>
					<p>The number one community to play competitive, no quitting Civiliation IV</p>
					<div className='media'>
						<h5>About Us</h5>
						<p>
							Civilization Players League (CPL) is a longstanding Civilization community aiming to deliver a fun and friendly, yet competitive environment for Civilization VI players. Our community hosts numerous games at all hours of the day with players from all over the world. We strive to give our players the best experience free of the common problems found in public games such as players randomly quitting or you getting disconnected from a multiplayer game.
							</p>
						<ul>
							<li><a>facebook</a></li>
							<li><a>discord</a></li>
							<li><a>youtube</a></li>
							<li><a>steam</a></li>
						</ul>
					</div>
				</div>



			</div>
		)
	}
}

export default Home;
