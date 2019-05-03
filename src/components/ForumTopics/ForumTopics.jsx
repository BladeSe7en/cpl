import React, { Component } from 'react';
import ForumThread from '../ForumThread';
import { thread } from '../ForumTopics/ForumTopicsActions';
class ForumTopics extends Component {
    constructor(props) {
        super(props);

        this.handleThread = this.handleThread.bind(this);
    }

    handleThread() {
        const { dispatch, viewingThread } = this.props;
        console.log('this is viewing thread: ', viewingThread)
        dispatch(thread(!viewingThread));
    }

    // handleUpVoting(e) {
    //     const { dispatch, votes } = this.props;
    //     const id = e.target.id;
    //     dispatch(upVote(id, votes))
    // }

    render() {
        const { newTopicActive, viewingThread } = this.props;
        const showHideTopic = newTopicActive ? 'topic-active' : 'topic';
        const showHideThread = viewingThread ? 'thread-active' : 'notActiveTopic';
        return (
            <div className={showHideTopic}>
                {console.log('this is showHideTopic: ', showHideTopic)}
                <h1>this is a forum topic title</h1>
                <p>this is where the body of the original posting goes</p>
                <div className='footer'>
                <span className='comments'>0 comments</span>
                <button className='toggle-thread' onClick={this.handleThread} >View Thread</button>
                    <img className='up-vote' src={'/pics/chevron_up.png'} />
                    <span className='vote'>Vote</span>
                    <img className='down-vote' src={'/pics/chevron_down.png'} />
                    <span className='vote-number'>+ 10</span>
                </div>
                <div className={showHideThread}>
                    <ForumThread />
                </div>
            </div>
        )
    }
}

export default ForumTopics
