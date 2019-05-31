import React, { Component } from 'react';
import { Field } from 'react-redux-form';
import moment from 'moment';
import { thread, getBlogs, getThreadsById, commentCount, updateCommentNum, onCommentChange, sortByPopularity, vote, threadDelete, topicDelete, commentSubmit, submitUpdatedComment, liveChangeBlogs, toggleThreadEdit, toggleCloseThreadEdit } from '../ForumTopics/ForumTopicsActions';
import { onChange } from '../ForumMain/ForumMainActions'
class ForumTopics extends Component {
    constructor(props) {
        super(props);

        this.handleThread               = this.handleThread              .bind(this);
        this.handleGetThreadsById       = this.handleGetThreadsById      .bind(this);
        this.handleCommentCount         = this.handleCommentCount        .bind(this);
        this.handleAddComment           = this.handleAddComment          .bind(this);
        this.handleCommentChange        = this.handleCommentChange       .bind(this);
        this.handleVote                 = this.handleVote                .bind(this);
        this.handleThreadDelete         = this.handleThreadDelete        .bind(this);
        this.handleTopicDelete          = this.handleTopicDelete         .bind(this);
        this.handleNewBlog              = this.handleNewBlog             .bind(this);
        this.handleNewThread            = this.handleNewThread           .bind(this);
        this.handleThreadEdit           = this.handleThreadEdit          .bind(this);
        this.handleCloseThreadEdit      = this.handleCloseThreadEdit     .bind(this);
        this.handleUpdatingComment      = this.handleUpdatingComment     .bind(this);
        this.handleSubmitUpdatedComment = this.handleSubmitUpdatedComment.bind(this);
    }

    handleSortByPopularity() {
        const { dispatch, sortOrder } = this.props;
        dispatch(sortByPopularity(sortOrder));
    }

    handleThread(e) {
        const blogId = e.target.id;
        const { dispatch, viewingThread } = this.props;
        dispatch(thread(!viewingThread, blogId));
    }

    componentDidMount() {
        const { dispatch } = this.props;
        const newBlog = this.handleNewBlog;
        let urlToChangeStream = '/api/blogPosts/change-stream?_format=event-stream';
        let src = new EventSource(urlToChangeStream);
        src.addEventListener('data', function (msg) {
            newBlog(msg)
        });

        const newThread = this.handleNewThread;
        let urlToChangeStream2 = '/api/threads/change-stream?_format=event-stream';
        let src2 = new EventSource(urlToChangeStream2);
        src2.addEventListener('data', function (msg) {
            newThread(msg)
        });
        dispatch(getBlogs());
    }

    handleNewBlog(msg) {
        console.log('inside handle new blog closure')
        const { dispatch } = this.props;
        let data = JSON.parse(msg.data);
        console.log('this is data.data: ', data.data)
        setTimeout(() => {
            dispatch(liveChangeBlogs(data));
        }, 1000);
    }

    handleNewThread(msg) {
        const { dispatch, viewingThreadId } = this.props;
        let data2 = JSON.parse(msg.data);
        console.log('data2: ', data2)
        if (data2.type == 'remove') {
            return dispatch(getThreadsById(viewingThreadId))
        }
        let id = data2.data.blogPostId
        setTimeout(() => {
            if (viewingThreadId === id) {
                dispatch(getThreadsById(id));
            } else {
                return
            }
        }, 1000);
    }

    handleGetThreadsById(e) {
        this.handleThread(e)
        const id = e.target.id;
        const { dispatch } = this.props;
        this.handleThread(e)
        dispatch(getThreadsById(id));
    }

    handleCommentCount(id) {
        console.log('inside handle comment count')
        const { dispatch } = this.props;
        dispatch(commentCount(id));
    }

    handleAddComment(e) {
        e.preventDefault();
        const { dispatch, comment, signedIn } = this.props;
        const date = moment().format('x');
        let blogId = e.target.name;
        let numComments = +(e.target.id);
        let newNum = (numComments + 1);
        console.log('newNum: ', newNum)
        if (signedIn.id === undefined) {
            return alert('Please Sign In To Post Comments');
        }
        const data = {
            "comment": comment,
            "date": date,
            "wasEdited": false,
            "blogPostId": blogId,
            "memberId": signedIn.id,
            "steamAvatarId": signedIn.avatar,
            "steamNameId": signedIn.name
        }
        dispatch(updateCommentNum(blogId, data, newNum));
    }

    handleVote(e) {
        const { dispatch, signedIn } = this.props;
        let voteNames = e.target.name.split();
        let signedInId = signedIn.id;
        console.log(typeof (signedInId))
        console.log('signedInId: ', signedInId)
        console.log('votenames: ', voteNames)
        if (signedInId == undefined) {
            (console.log('id is undefined'))
            return alert('Please sign in to vote on blogs.')
        }
        if (voteNames[0].includes(signedInId)) {
            console.log('player already voted')
            return alert('You have already voted once on this topic.')
        }
        if (e.target.className === 'up-vote') {
            var voteCount = +(e.target.title) + 1;
        }
        if (e.target.className === 'down-vote') {
            var voteCount = +(e.target.title) - 1;
        }
        let blogId = e.target.id;
        voteNames.push(signedInId);
        dispatch(vote(blogId, voteCount, voteNames));
    }

    handleCommentChange(e) {
        const { dispatch } = this.props;
        dispatch(onCommentChange(e.target.name, e.target.value));
    }

    handleSubmitUpdatedComment(e) {
        const { dispatch, comment, signedIn } = this.props;
        console.log('inside comment submit')
        e.preventDefault();
        if (signedIn.id === undefined) {
            return alert('Please Sign In To Post A Topic.')
        } else {
            var memberId = signedIn.id;
        }
        const threadId = e.target.name;
        const date = moment().format('x');
        const avatar = signedIn.avatar;
        const steamName = signedIn.name;
        dispatch(submitUpdatedComment(date, comment, memberId, threadId, avatar, steamName))
    }

    handleCommentSubmit(e) {
        const { dispatch, comment, signedIn } = this.props;
        console.log('inside comment submit')
        e.preventDefault();
        if (signedIn.id === undefined) {
            return alert('Please Sign In To Post A Topic.')
        } else {
            var memberId = signedIn.id;
        }
        const blogId = e.target.name;
        const date = moment().format('x');
        const avatar = signedIn.avatar;
        const steamName = signedIn.name;
        dispatch(commentSubmit(date, comment, memberId, blogId, avatar, steamName))
    }

    handleThreadDelete(e) {
        const { dispatch } = this.props;
        const deleteId = e.target.id;
        const number = e.target.name;
        const blogId = e.target.title;
        dispatch(threadDelete(deleteId, number, blogId))
    }

    handleTopicDelete(e) {
        const { dispatch } = this.props;
        const topicDeleteId = e.target.id;
        console.log('this is e.target.id: ', e.target.id)
        dispatch(topicDelete(topicDeleteId))
    }

    handleThreadEdit(e) {
        const { dispatch, editingComment } = this.props;
        let threadId = e.target.id;
        let comment = e.target.title;
        dispatch(toggleThreadEdit(!editingComment, threadId, comment))
    }

    handleCloseThreadEdit() {
        const { dispatch, editingComment } = this.props;
        dispatch(toggleCloseThreadEdit(!editingComment))
    }

    handleUpdatingComment(e) {
        console.log('onchange triggered')
        const { dispatch } = this.props;
        dispatch(onChange(e.target.name, e.target.value))
    }

   

    render() {
        const { newTopicActive, viewingThread, viewingThreadId, blogId, blogs, count } = this.props;
        const showHideTopic = newTopicActive ? 'topic-active' : 'topic';
        return (
            <div className={showHideTopic}>
                {blogs && blogs.map(blog => {
                     if (blog.wasEdited === true) {
                        var wasEdited = ' *EDITED*'
                    } else {
                        var wasEdited = ''
                    }
                    const viewCloseThread = blog.id === blogId && viewingThread ? 'Close Thread' : 'View Thread'
                    let date = Number(blog.date);
                    let newDate = moment(date).format('LLL')
                    return (
                        <div key={blog.id} className='single-blog'>
                            <h2 className='steam-name'>{blog.steamNameId}</h2>
                            <h2 className='date'>{moment(date).format('LLL')}{wasEdited}</h2>
                            <h1>{blog.blogTitle}</h1>
                            <p>{blog.blogBody}</p>
                            <img className='thread-edit' src={'/pics/edit-icon-white.png'} onClick={this.handleCloseThreadEdit} />
                            <img className='thread-delete' id={blog.id} src={'/pics/trash-icon-white.png'} onClick={this.handleTopicDelete} />
                            <div className='footer'>
                                <span className='comments'> {blog.numComments} comments</span>
                                <button className='btn toggle-thread' id={blog.id} onClick={this.handleGetThreadsById} >{viewCloseThread}</button>
                                <img className='up-vote' title={blog.upVotes} name={blog.voteNames} id={blog.id} onClick={this.handleVote} src={'/pics/chevron_up.png'} />
                                <span className='vote'>Vote</span>
                                <img className='down-vote' title={blog.upVotes} name={blog.voteNames} id={blog.id} onClick={this.handleVote} src={'/pics/chevron_down.png'} />
                                <span className='vote-number'>{blog.upVotes}</span>
                            </div>

                            {this.renderThread(blog.id, blog.numComments)}
                        </div>
                    )
                })}
            </div>
        )
    }

    renderThread(mappedBlogId, numComments) {
        const { threads, blogId, viewingThread, viewingThreadId, comment, editingComment, editingCommentId } = this.props;
        let showHideAddNewTopic = !editingComment ? 'add-new-comment' : 'notActiveTopic'
        if (threads.length === 0) {
            <div className='mapped-thread'>
                <div className='add-new-comment'>
                    <form name={blogId} id={numComments} onSubmit={this.handleAddComment}>
                        <Field model='new-topic-body'>
                            <label htmlFor='new-topic-body'>Add New Comment: </label>
                            <textarea type="text" name="comment" value={comment} required onChange={this.handleCommentChange} />
                        </Field>
                        <button className='btn' id='speaker-submit'>Submit!</button>
                    </form>
                </div>
            </div>
        }
        if (mappedBlogId === blogId && viewingThread) {
            return (
                <div className='mapped-thread'>
                    {threads && threads.map(thread => {
                        let date = Number(thread.date);
                        if (thread.wasEdited === true) {
                            var wasEdited = ' *EDITED*'
                        } else {
                            var wasEdited = ''
                        }
                        if (editingComment && editingCommentId === thread.id) {
                            return (
                                <div className='editing-thread'>
                                            <div key={thread.id} className='now-editing'>
                                            <img className='close-thread-edit' src='./pics/xbutton.png'  onClick={this.handleThreadEdit} />
                                                <div className='thread-avatar'><img src={thread.steamAvatarId} /> </div>
                                                <div className='thread-name'> {thread.steamNameId} </div>
                                                <div className='thread-date'> {moment(date).format('LLL')}{wasEdited} </div>
                                                <div className='edit-old-comment'>
                                                    <form name={thread.id} id={numComments} onSubmit={this.handleSubmitUpdatedComment}>
                                                        <Field model='edit-old-comment'>
                                                            <label htmlFor='edit-old-comment'>Edit Comment: </label>
                                                            <textarea type="text" name="comment" value={comment} required onChange={this.handleUpdatingComment} />
                                                        </Field>
                                                        <button className='btn' id='speaker-submit'>Submit!</button>
                                                    </form>
                                                </div>
                                            </div>
                                </div>
                            )
                        } else if(editingCommentId !== thread.id) 
                        if (thread.wasEdited === true) {
                            var wasEdited = ' *EDITED*'
                        } else {
                            var wasEdited = ''
                        }
                        return (
                            <div key={thread.id} className='map-child'>
                                <div className='thread-avatar'><img src={thread.steamAvatarId} /> </div>
                                <div className='thread-name'> {thread.steamNameId} </div>
                                <div className='thread-date'> {moment(date).format('LLL')}{wasEdited} </div>
                                <img className='thread-edit' src={'/pics/edit-icon-white.png'} id={thread.id} title={thread.comment} onClick={this.handleThreadEdit} />
                                <img className='thread-delete' id={thread.id} name={numComments} title={blogId} src={'/pics/trash-icon-white.png'} onClick={this.handleThreadDelete} />
                                <div className='thread-comment'>{thread.comment}</div>
                            </div>
                        )
                    })}
                    <div className={showHideAddNewTopic}>
                        <form name={blogId} id={numComments} onSubmit={this.handleAddComment}>
                            <Field model='new-topic-body'>
                                <label htmlFor='new-topic-body'>Add New Comment: </label>
                                <textarea type="text" name="comment" value={comment} required onChange={this.handleCommentChange} />
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
