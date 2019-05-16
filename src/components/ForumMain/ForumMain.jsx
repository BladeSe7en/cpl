import React, { Component } from 'react';
import { Field } from 'react-redux-form';
import Navbar from '../Navbar/Navbar';
import ForumTopics from '../ForumTopics';
import { toggleActive, toggleSignIn, playerData, togglePopularity, blogsByDate, dateToggle, onChange, topicSubmit } from './ForumMainActions';
import { sortByPopularity,  } from '../ForumTopics/ForumTopicsActions';
import Axios from 'axios';
import moment from 'moment';

class Forum extends Component {
	constructor(props) {
		super(props);

		this.handleNewTopic         = this.handleNewTopic        .bind(this);
		this.handleSignIn           = this.handleSignIn          .bind(this);
		this.handlePlayerData       = this.handlePlayerData      .bind(this);
		this.handleSortByPopularity = this.handleSortByPopularity.bind(this);
		this.handlePopularity       = this.handlePopularity      .bind(this);
		this.handleBlogsByDate      = this.handleBlogsByDate     .bind(this);
		this.handleDateToggle		= this.handleDateToggle      .bind(this);
		this.handleChange           = this.handleChange          .bind(this);
		this.handleTopicSubmit      = this.handleTopicSubmit     .bind(this);
	}
	handleNewTopic() {
		const { dispatch, newTopicActive } = this.props;
		dispatch(toggleActive(!newTopicActive))
	}
	handleSignIn() {
		const { dispatch } = this.props;
		dispatch(toggleSignIn());
	}
	handlePlayerData(value) {
		const { dispatch } = this.props;
		dispatch(playerData(value));
	}

	handleSortByPopularity() {
		const { dispatch, popularityOrder } = this.props;
		console.log('inside handle sort by popularity')
		this.handlePopularity();
		dispatch(sortByPopularity(popularityOrder));
	}

	handlePopularity() {
		console.log('inside handle popularity')
		const { dispatch, popularityOrder } = this.props;
		dispatch(togglePopularity(popularityOrder));
	}

	handleBlogsByDate() {
		const { dispatch, dateOrder } = this.props;
		this.handleDateToggle();
		dispatch(blogsByDate(dateOrder));
	}

	handleDateToggle() {
		const { dispatch, dateOrder } = this.props;
		console.log('this is dateOrder: ',dateOrder)
		dispatch(dateToggle(dateOrder));
	}

	handleChange(e) { 
		const { dispatch } = this.props;
		dispatch(onChange(e.target.name, e.target.value))
	}
	
	handleTopicSubmit(e) {
		const { dispatch, newTopic, newTopicBody, signedIn } = this.props;
		e.preventDefault();
		if (signedIn.id === undefined) {
			 return alert('Please Sign In To Post A Topic.')
		} else {
			var memberId = signedIn.id;
		}
		const date = moment().format('x');
		dispatch(topicSubmit(date, newTopic, newTopicBody, memberId))
	}


	componentDidMount() {
		Axios.get('/ForumMain')
			.then(response => {
				if (response.data === 'not logged in') {
					return
				} else {
					let player = {
						id: response.data.steamid,
						name: response.data.personaname,
						profile: response.data.profileurl,
						avatar: response.data.avatar,
					}
					console.log('this is player in component did mount: ',player)
					this.handlePlayerData(player);
				}
			})

	}

	render() {
		const { signedIn, popularityOrder, dateOrder } = this.props;
		console.log('signedIn.name: ',signedIn.name)
		const whosSignedIn = signedIn.name === undefined ? 'Not Signed In' : `Signed in as ${signedIn.name}`
		const signInBtn = whosSignedIn === 'Not Signed In' ? 'btn sign-in' : 'notActiveTopic';
		const signOutBtn = whosSignedIn === 'Not Signed In' ? 'notActiveTopic' : 'btn sign-in';
		const popularityBtn = popularityOrder ===  true ? 'View Popular Posts' : 'View Unpopular Posts';
		const newestBtn = dateOrder === true ? 'View Newest Posts' : 'View Oldest Posts';
		console.log('this is whos signed in: ',whosSignedIn)
		return (
			<div>
				<Navbar />
				<div className='banner-forum'>
					<div className='banner-opacity-forum'>
						<div className='panel'>
							<div className='forum-btns'>
								<button className='btn add-new' onClick={this.handleNewTopic} >Add New Topic!</button>
								<button className={`${signInBtn}`}> <a href="/authenticate" ></a>Sign In!</button>
								<button className={`${signOutBtn}`}> <a href="/logout" ></a>Sign Out!</button>
								<button className='btn view-new-posts' onClick={this.handleBlogsByDate} >{newestBtn}</button>
								<button className='btn view-popular-posts' onClick={this.handleSortByPopularity}>{popularityBtn}</button>
								<h1 className='signed-in'>{whosSignedIn}</h1>
							</div>
							{this.renderTopic()}
							<ForumTopics />
						</div>
					</div>
				</div>
			</div>
		)
	}
	renderTopic() {
		const { newTopic, newTopicBody, newTopicActive } = this.props;
		const showHide = newTopicActive ? 'add-new-topic' : 'notActiveTopic'
		return (
			<div className={showHide}>
				<img className='close-btn' src='./pics/xbutton.png' onClick={this.handleNewTopic} />
				<form onSubmit={this.handleTopicSubmit}>
					<Field model='new-topic'>
						<label htmlFor='new-topic'>Add New Topic: </label>
						<input name='newTopic' id='new-topic' value={newTopic} type='text' onChange={this.handleChange} required />
					</Field >
					<Field model='new-topic-body'>
						<label htmlFor='new-topic-body'>Content: </label>
						<textarea type="text" name="newTopicBody" value={newTopicBody} required onChange={this.handleChange} />
					</Field>
					<button className='btn' id='speaker-submit'>Submit!</button>
				</form>
			</div>
		)
	}
}

export default Forum;



