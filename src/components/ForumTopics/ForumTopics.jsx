import React, { Component } from 'react';
import { Field } from 'react-redux-form';
import moment from 'moment';
import { thread, getBlogs, getThreadsById, commentCount, updateCommentNum, onCommentChange, vote, commentDelete, topicDelete, submitUpdatedComment, liveChangeBlogs, toggleThreadEdit, editBlogPost, deleteBlogPost, reset, submitUpdatedBlog } from '../ForumTopics/ForumTopicsActions';
import { onChange } from '../ForumMain/ForumMainActions'
import BlogPagination from '../BlogPagination';
import ThreadPagination from '../ThreadPagination'
class ForumTopics extends Component {
    constructor(props) {
        super(props);

        this.handleAddComment           = this.handleAddComment          .bind(this);
        this.handleEditBlogPost         = this.handleEditBlogPost        .bind(this);
        this.handleCommentCount         = this.handleCommentCount        .bind(this);
        this.handleCommentChange        = this.handleCommentChange       .bind(this);
        this.handleCommentDelete        = this.handleCommentDelete       .bind(this);
        this.handleDeleteBlogPost       = this.handleDeleteBlogPost      .bind(this);
        this.handleGetThreadsById       = this.handleGetThreadsById      .bind(this);
        this.handleNewBlog              = this.handleNewBlog             .bind(this);
        this.handleNewThread            = this.handleNewThread           .bind(this);
        this.handleSubmitUpdatedComment = this.handleSubmitUpdatedComment.bind(this);
        this.handleThread               = this.handleThread              .bind(this);
        this.handleThreadEdit           = this.handleThreadEdit          .bind(this);
        this.handleTopicDelete          = this.handleTopicDelete         .bind(this);
        this.handleChange               = this.handleChange              .bind(this);
        this.handleVote                 = this.handleVote                .bind(this);
        this.handleSubmitUpdatedBlog    = this.handleSubmitUpdatedBlog   .bind(this);
    }

    componentDidMount() {
        const { dispatch, viewPerPageBlog } = this.props;
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
        dispatch(getBlogs(viewPerPageBlog, 0));
    }

    componentWillUnmount() {
        const { dispatch } = this.props;
        dispatch(reset())
    }

    handleAddComment(e) {
        e.preventDefault();
        const { dispatch, comment, signedIn } = this.props;
        const date = moment().format('x');
        let blogId = e.target.name;
        let numComments = +(e.target.id);
        let newNum = (numComments + 1);
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

    handleEditBlogPost(e) {
      const { dispatch, editingBlog } = this.props;
      let blogId = e.target.id;
      let blogTitle = e.target.title;
      let blogBody = e.target.name;
      dispatch(editBlogPost(!editingBlog, blogId, blogTitle, blogBody))
    }

    handleDeleteBlogPost(e) {
        const { dispatch } = this.props;
        let blogId = e.target.id;
        dispatch(deleteBlogPost(blogId))
    }

    handleCommentCount(id) {
        const { dispatch } = this.props;
        dispatch(commentCount(id));
    }

    handleCommentChange(e) {
        const { dispatch } = this.props;
        dispatch(onCommentChange(e.target.name, e.target.value));
    }

    handleCommentDelete(e) {
        const { dispatch } = this.props;
        let deleteId = e.target.id;
        let number = e.target.name;
        let blogId = e.target.title;
        dispatch(commentDelete(deleteId, number, blogId))
    }

    handleGetThreadsById(e) {
        this.handleThread(e)
        const id = e.target.id;
        const { dispatch } = this.props;
        dispatch(getThreadsById(id, 10, 0));
    }

    handleNewBlog(msg) {
        const { dispatch, viewPerPageBlog } = this.props;
        let data = JSON.parse(msg.data);
        if(data.data == undefined) {
            setTimeout(() => {
                dispatch(getBlogs(viewPerPageBlog, 0));
            }, 1000);
        } else {
            setTimeout(() => {
                dispatch(liveChangeBlogs(data));

            }, 1000);
        }
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

    handleSubmitUpdatedComment(e) {
        const { dispatch, comment, signedIn } = this.props;
        e.preventDefault();
        if (signedIn.id === undefined) {
            return alert('Please Sign In To Post A Topic.')
        } else {
            var memberId = signedIn.id;
        }
        let threadId = e.target.name;
        let date = moment().format('x');
        let avatar = signedIn.avatar;
        let steamName = signedIn.name;
        dispatch(submitUpdatedComment(date, comment, memberId, threadId, avatar, steamName))
    }

    handleSubmitUpdatedBlog(e) {
        const { dispatch, newBlogBody, newBlogTitle, signedIn } = this.props;
        e.preventDefault();
        if (signedIn.id === undefined) {
            return alert('Please Sign In To Edit Your Topic.')
        }
        let blogId = e.target.name;
        let date = moment().format('x');
        dispatch(submitUpdatedBlog(date, newBlogBody, newBlogTitle, blogId))
    }

    handleThread(e) {
        const { dispatch, viewingThread } = this.props;
        let blogId = e.target.id;
        dispatch(thread(!viewingThread, blogId));
    }

    handleThreadEdit(e) {
        const { dispatch, editingComment } = this.props;
        let threadId = e.target.id;
        let comment = e.target.title;
        dispatch(toggleThreadEdit(!editingComment, threadId, comment))
    }

    handleTopicDelete(e) {
        const { dispatch } = this.props;
        let topicDeleteId = e.target.id;
        dispatch(topicDelete(topicDeleteId))
    }

    handleChange(e) {
        const { dispatch } = this.props;
        dispatch(onChange(e.target.name, e.target.value))
    }

    handleVote(e) {
        const { dispatch, signedIn } = this.props;
        let voteNames = e.target.name.split();
        let signedInId = signedIn.id;
        if (signedInId == undefined) {
            return alert('Please sign in to vote on blogs.')
        }
        if (voteNames[0].includes(signedInId)) {
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

    render() {
        const { newTopicActive, viewingThread, blogId, blogs, editingBlog, editingBlogId, newBlogTitle, newBlogBody } = this.props;
        const showHideTopic = newTopicActive ? 'topic-active' : 'topic';
        let showHideBlogPages = viewingThread ? 'hide' : 'blog-pagination-container';
        console.log('showHideBlogPages: ',showHideBlogPages)
        return (
            <div className={showHideTopic}>
                {blogs !=='' && blogs.map(blog => {
                    if (blog.wasEdited === true) {
                        var wasEdited = ' *EDITED*'
                    } else {
                        var wasEdited = '' 
                    }

                    if (editingBlog && editingBlogId === blog.id) {
                        return (
                            <div key={blog.id} className='blog-edit'>
                            <img className='close-thread-edit' src='./pics/xbutton.png' onClick={this.handleEditBlogPost} />
                            <form name={blog.id} onSubmit={this.handleSubmitUpdatedBlog}>
                                <Field model='edit-blog-title'>
                                    <label htmlFor='edit-blog-title'>Edit Blog Title: </label>
                                    <textarea type="text" name="newBlogTitle" value={newBlogTitle} required onChange={this.handleChange} />
                                </Field>
                                <Field model='edit-blog-body'>
                                    <label htmlFor='edit-blog-body'>Edit Blog Body: </label>
                                    <textarea type="text" name="newBlogBody" value={newBlogBody} required onChange={this.handleChange} />
                                </Field>
                                <button className='btn'>Submit!</button>
                            </form>
                        </div>
                        )
                    }
                    const viewCloseThread = blog.id === blogId && viewingThread ? 'Close Thread' : 'View Thread';
                    let date = Number(blog.date);
                    return (
                        <div key={blog.id} className='single-blog'>
                            <h2 className='steam-name'>{blog.steamNameId}</h2>
                            <h2 className='date'>{moment(date).format('LLL')}{wasEdited}</h2>
                            <h1>{blog.blogTitle}</h1>
                            <p>{blog.blogBody}</p>
                            <img className='thread-edit' src={'/pics/edit-icon-white.png'} id={blog.id} title={blog.blogTitle} name={blog.blogBody} onClick={this.handleEditBlogPost} />
                            <img className='thread-delete' id={blog.id} src={'/pics/trash-icon-white.png'} onClick={this.handleDeleteBlogPost} />
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
                <div className={showHideBlogPages}>
                <BlogPagination/>
                </div>
            </div>
        )
    }

    renderThread(mappedBlogId, numComments) {
        const { threads, blogId, viewingThread, comment, editingComment, editingCommentId } = this.props;
        let showHideAddNewTopic = !editingComment ? 'add-new-comment' : 'notActiveTopic';
        let showHideThreadPages = viewingThread ? 'thread-pagination-container' : 'hide';
        console.log('showHideThreadPages: ',showHideThreadPages)
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
                                                            <textarea type="text" name="comment" value={comment} required onChange={this.handleChange} />
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
                                <img className='thread-delete' id={thread.id} name={numComments} title={blogId} src={'/pics/trash-icon-white.png'} onClick={this.handleDeleteBlogPost} />
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
                    <div className={showHideThreadPages}>
                    <ThreadPagination/>
                    </div>
                </div>
            )
        }
       
    }
}

export default ForumTopics
