import React, { Component } from 'react';
import { Field } from 'react-redux-form';
import Navbar from '../Navbar/Navbar';
import ForumTopics from '../ForumTopics';
import { toggleActive, toggleSignIn } from './ForumMainActions'

class Forum extends Component {
	constructor(props) {
		super(props);

		this.handleNewTopic = this.handleNewTopic.bind(this);
		this.handleSignIn   = this.handleSignIn  .bind(this);

	}
	handleNewTopic() {
		const { dispatch, newTopicActive } = this.props;
		dispatch(toggleActive(!newTopicActive))
	}
	handleSignIn() {
		const { dispatch } = this.props;
		dispatch(toggleSignIn())
	}

	render() {
		return (
			<div className='container'>
				<Navbar />
				<div className='banner-forum'>
					<div className='banner-opacity-forum'>
						<div className='panel'>
							<div className='forum-btns'>
								<button className='btn' onClick={this.handleNewTopic} >Add New Topic!</button>
								<button className='btn sign-in' onClick={this.handleSignIn} >Sign In!</button>
								<a href="/authenticate"><img src="https://steamcommunity-a.akamaihd.net/public/images/signinthroughsteam/sits_01.png"/></a>
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
				<form onSubmit={this.submitSpeaker}>
					<Field model='new-topic'>
						<label htmlFor='new-topic'>Add New Topic: </label>
						<input name='text' id='new-topic' value={newTopic} type='text' onChange={this.handleNewTopic} required />
					</Field >
					<Field model='new-topic-body'>
						<label htmlFor='new-topic-body'>Content: </label>
						<textarea type="text" name="new-topic-body" value={newTopicBody} required onChange={this.handlenewTopicBody} />
					</Field>
					<button className='btn' id='speaker-submit'>Submit!</button>
				</form>
			</div>
		)
	}
}

export default Forum;



