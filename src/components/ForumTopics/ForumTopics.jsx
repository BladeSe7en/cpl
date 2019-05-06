import React, { Component } from 'react';
import { Field } from 'react-redux-form';
import ForumThread from '../ForumThread';
import { thread, getBlogs, getThreadsById } from '../ForumTopics/ForumTopicsActions';
class ForumTopics extends Component {
    constructor(props) {
        super(props);

        this.handleThread = this.handleThread.bind(this);
        this.handleGetThreadsById = this.handleGetThreadsById.bind(this);

    }

    handleThread(e) {
        const id = e.target.id;
        const { dispatch, viewingThread } = this.props;
        console.log('this is viewing thread: ', viewingThread)
        dispatch(thread(!viewingThread, id));
    }

    componentDidMount(e) {
        const { dispatch } = this.props;
        dispatch(getBlogs());
    }

    handleGetThreadsById(e) {
        this.handleThread(e)
        const id = e.target.id;
        const { dispatch } = this.props;
        dispatch(getThreadsById(id))
    }


    // handleUpVoting(e) {
    //     const { dispatch, votes } = this.props;
    //     const id = e.target.id;
    //     dispatch(upVote(id, votes))
    // }

    render() {
        const { newTopicActive, viewingThread, blogs } = this.props;
        const showHideTopic = newTopicActive ? 'topic-active' : 'topic';
        const showHideThread = viewingThread ? 'thread-active' : 'notActiveTopic';
        return (
            <div className={showHideTopic}>
                {console.log('blogs in Component: ', blogs)}
                {blogs && blogs.map(blog => (
                    <div key={blog.id} className='single-blog'>
                        <h2 className='steam-name'>{blog.steamNameId}</h2>
                        <h2 className='date'>{blog.date}</h2>
                        <h1>{blog.blogTitle}</h1>
                        <p>{blog.blogBody}</p>
                        <div className='footer'>
                            <span className='comments'>2 comments</span>
                            <button className='toggle-thread' id={blog.id} onClick={this.handleGetThreadsById} >View Thread</button>
                            <img className='up-vote' src={'/pics/chevron_up.png'} />
                            <span className='vote'>Vote</span>
                            <img className='down-vote' src={'/pics/chevron_down.png'} />
                            <span className='vote-number'>+ 10</span>
                        </div>
                        {this.renderThread(blog.id)}
                    </div>

                ))}
            </div>
        )
    }

    renderThread(blogId) {
        const { threads, id } = this.props;
        console.log('does ', blogId, ' === ', id)
        if (blogId === id) {
            console.log('yes it does!')
            return (
                <div className='mapped-thread'>
                    {console.log('threads: ', threads)}
                    {threads && threads.map(thread => (
                        <div key={thread.id} className='map-child'>
                            <div className='thread-avatar'><img src={thread.steamAvatarId}/> </div>
                            <div className='thread-name'> {thread.steamNameId} </div>
                            <div className='thread-date'> {thread.date} </div>
                            <img className='thread-edit' src={'/pics/edit-icon.png'} onClick={this.handleThreadEdit}/>
                            <img className='thread-delete' src={'/pics/trash-icon.png'} onClick={this.handleThreadDelete}/>
                            <button className='thread-delete' id={thread.id} onClick={this.handleThreadDelete}></button>
                            <div className='thread-comment'>{thread.comment}</div>

                        </div>
                    ))}
                    <div className='add-new-topic'>
                        <img className='close-btn' src='./pics/xbutton.png' onClick={this.handleNewTopic} />
                        <form onSubmit={this.submitSpeaker}>
                            <Field model='new-topic'>
                                <label htmlFor='new-topic'>Add New Comment: </label>
                                <input name='text' id='new-topic' value='' type='text' onChange={this.handleNewTopic} required />
                            </Field >
                            <Field model='new-topic-body'>
                                <label htmlFor='new-topic-body'>Content: </label>
                                <textarea type="text" name="new-topic-body" value='' required onChange={this.handlenewTopicBody} />
                            </Field>
                            <button className='btn' id='speaker-submit'>Submit!</button>
                        </form>
                    </div>
                </div>
            )
        }
    }
}

export default ForumTopics


