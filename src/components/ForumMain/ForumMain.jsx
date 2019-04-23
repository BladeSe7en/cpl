import React, { Component } from 'react';
import { Field } from 'react-redux-form';

import Navbar from '../Navbar/Navbar';
import ForumLogin from '../ForumLogin';
import ForumTopics from '../ForumTopics';
import { toggleActive } from './ForumMainActions'

class Forum extends Component {
	constructor(props) {
		super(props);

		this.handleNewTopic = this.handleNewTopic.bind(this);
	}
	handleNewTopic() {
		const { dispatch, newTopicActive } = this.props;
		dispatch(toggleActive(newTopicActive))
	}

	render() {
		return (
			<div className='container'>>
				<Navbar />
				<div className='banner'>
					<div className='banner-opacity'>
						<div className='panel'>
							{/* <ForumLogin />
					<ForumTopics /> */}
						</div>
					</div>
				</div>
			</div>
		)
	}
	renderTopic() {
		const { newTopic, newTopicBody } = this.props;
		return (
			<div className='container'>>
				<Navbar />
				<div className='banner'>
					<div className='banner-opacity'>
						<div className='panel'>
							{/* <ForumLogin />
					<ForumTopics /> */}

							<div className='forum-btns'>
								<button className='btn' onClick={this.handleNewTopic} >Add New Topic!</button>
								<button className='btn sign-in' onClick={this.signIn} >Sign In!</button>
							</div>

							<div className='add-new-topic'>
								<form onSubmit={this.submitSpeaker}>
									<h3>Add a new topic</h3>
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
						</div>

					</div>
				</div>
			</div>

		)
	}
// 					<div className='forum-btns'>
// 	<button className='btn' onClick={this.handleNewTopic} >Add New Topic!</button>
// 	<button className='btn sign-in' onClick={this.signIn} >Sign In!</button>
// </div>

// 	<div className='add-new-topic'>
// 		<form onSubmit={this.submitSpeaker}>
// 			<h3>Add a new topic</h3>
// 			<Field model='new-topic'>
// 				<label htmlFor='new-topic'>Add New Topic: </label>
// 				<input name='text' id='new-topic' value={newTopic} type='text' onChange={this.handleNewTopic} required />
// 			</Field >
// 			<Field model='new-topic-body'>
// 				<label htmlFor='new-topic-body'>Content: </label>
// 				<textarea type="text" name="new-topic-body" value={newTopicBody} required onChange={this.handlenewTopicBody} />
// 			</Field>
// 			<button className='btn' id='speaker-submit'>Submit!</button>
// 		</form>
// 	</div>
// 					</div >
				
// 				</div >
// 				</div >
// 			</div >

// 			)
// 	}
 }

export default Forum;
