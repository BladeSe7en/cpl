import React, { Component } from 'react';
import { Field } from 'react-redux-form';
import moment from 'moment';
import { thread, getBlogs, getThreadsById, commentCount, addComment, onCommentChange, sortByPopularity, vote, threadDelete, topicDelete, commentSubmit, liveChangeBlogs, updateCommentNum } from '../ForumTopics/ForumTopicsActions';
class ForumTopics extends Component {
    constructor(props) {
        super(props);

        this.handleThread         = this.handleThread        .bind(this);
        this.handleGetThreadsById = this.handleGetThreadsById.bind(this);
        this.handleCommentCount   = this.handleCommentCount  .bind(this);
        this.handleAddComment     = this.handleAddComment    .bind(this);
        this.handleCommentChange  = this.handleCommentChange .bind(this);
        this.handleVote           = this.handleVote          .bind(this);
        this.handleThreadDelete   = this.handleThreadDelete  .bind(this);
        this.handleTopicDelete    = this.handleTopicDelete   .bind(this);
        this.handleNewThread      = this.handleNewThread     .bind(this);

    }

    handleSortByPopularity() {
        const { dispatch, sortOrder } = this.props;
        dispatch(sortByPopularity(sortOrder));
    }

    handleThread(e) {
        const id = e.target.id;
        const { dispatch, viewingThread } = this.props;
        dispatch(thread(!viewingThread, id));
    }

    componentDidMount() {
        const { dispatch, viewingThreadId } = this.props;
        let urlToChangeStream = '/api/blogPosts/change-stream?_format=event-stream';
        let src = new EventSource(urlToChangeStream);
        src.addEventListener('data', function (msg) {
            let data = JSON.parse(msg.data);
            setTimeout(() => {
                dispatch(liveChangeBlogs(data));
            }, 1000);
        });

        const newThread = this.handleNewThread
        let urlToChangeStream2 = '/api/threads/change-stream?_format=event-stream';
        let src2 = new EventSource(urlToChangeStream2);
        src2.addEventListener('data', function (msg) {
            newThread(msg)
        });
        dispatch(getBlogs());
    }

    handleNewThread(msg) {
        const { dispatch, viewingThreadId } = this.props;
        let data2 = JSON.parse(msg.data);
        console.log('this is data2: ', data2)
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
        console.log('typeof: ', typeof(+numComments))
        console.log('this is numComments: ', +numComments)
        let newNum = (numComments+1);
        console.log('newNum: ', newNum)
        if (signedIn.id === undefined) {
            return alert('Please Sign In To Post Comments');
        }
        console.log('blogId---',blogId)
        //updateCommentNum(newNum, blogId);
        const data = {
            "comment": comment,
            "date": date,
            "wasEdited": false,
            "blogPostId": blogId,
            "memberId": signedIn.id,
            "steamAvatarId": signedIn.avatar,
            "steamNameId": signedIn.name
        }
        console.log('this is data from add comment: ', data)
        dispatch(addComment(data, newNum));

    }

    handleVote(e) {
        const { dispatch, signedIn } = this.props;
        let voteNames = e.target.name.split();
        if (signedIn === undefined) {
            return alert('Please sign in to vote on blogs.')
        }
        if (voteNames.includes(signedIn.id)) {
            return alert('You have already voted once on this topic.')
        }
        if (e.target.className === 'up-vote') {
            var voteCount = +(e.target.title) + 1;
        }
        if (e.target.className === 'down-vote') {
            var voteCount = +(e.target.title) - 1;
        }
        let signedInId = signedIn.id;
        let blogId = e.target.id;
        voteNames.push(signedInId);
        dispatch(vote(blogId, voteCount, voteNames));
    }

    handleCommentChange(e) {
        const { dispatch } = this.props;
        dispatch(onCommentChange(e.target.name, e.target.value));
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
        dispatch(threadDelete(deleteId))
    }

    handleTopicDelete(e) {
        const { dispatch } = this.props;
        const topicDeleteId = e.target.id;
        console.log('this is e.target.id: ', e.target.id)
        dispatch(topicDelete(topicDeleteId))
    }

    render() {
        const { newTopicActive, viewingThread, viewingThreadId, id, blogs, count } = this.props;
        const showHideTopic = newTopicActive ? 'topic-active' : 'topic';
        return (
            <div className={showHideTopic}>
                {blogs && blogs.map(blog => {
                    const viewCloseThread = blog.id === id && viewingThread ? 'Close Thread' : 'View Thread'
                    let date = Number(blog.date);
                    let newDate = moment(date).format('LLL')
                    //  console.log('this is date: ',newDate)
                    return (
                        <div key={blog.id} className='single-blog'>
                            <h2 className='steam-name'>{blog.steamNameId}</h2>
                            <h2 className='date'>{moment(date).format('LLL')}</h2>
                            <h1>{blog.blogTitle}</h1>
                            <p>{blog.blogBody}</p>
                            <img className='thread-edit' src={'/pics/edit-icon.png'} onClick={this.handleThreadEdit} />
                            <img className='thread-delete' id={blog.id} src={'/pics/trash-icon.png'} onClick={this.handleTopicDelete} />
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

    renderThread(blogId, numComments) {
        const { threads, id, viewingThread, viewingThreadId, comment } = this.props;
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
        if (blogId === id && viewingThread) {
            return (
                <div className='mapped-thread'>
                    {threads && threads.map(thread => {
                        let date = Number(thread.date);
                        return (
                            <div key={thread.id} className='map-child'>
                                <div className='thread-avatar'><img src={thread.steamAvatarId} /> </div>
                                <div className='thread-name'> {thread.steamNameId} </div>
                                <div className='thread-date'> {moment(date).format('LLL')} </div>
                                <img className='thread-edit' src={'/pics/edit-icon.png'} onClick={this.handleThreadEdit} />
                                <img className='thread-delete' id={thread.id} src={'/pics/trash-icon.png'} onClick={this.handleThreadDelete} />
                                <div className='thread-comment'>{thread.comment}</div>
                            </div>
                        )
                    })}
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
            )
        }
    }
}

export default ForumTopics





//   [
//     {
//       "blogTitle": "I like cheese",
//       "blogBody": "can we have a discussion about cheese",
//       "date": "May 1, 2019 7:36 PM",
//       "upVotes": 5,
//       "numComments": 4,
//       "id": "5cce532f8722dd4aedf1ade7",
//       "memberId": "5cce520b8722dd4aedf1ade1",
//       "steamNameId": "BladeSe7en",
//       "threadId": [
//         {
//           "comment": "cheese cheese cheese cheese cheese cheese cheese cheese cheese cheese cheese cheese cheese cheese cheese cheese cheese cheese cheese cheese cheese cheese cheese cheese cheese cheese cheese cheese cheese cheese cheese cheese cheese cheese cheese cheese cheese cheese cheese cheese cheese cheese cheese cheese cheese cheese cheese cheese cheese cheese cheese cheese cheese cheese cheese cheese cheese cheese cheese cheese cheese cheese cheese cheese cheese cheese cheese cheese cheese cheese cheese cheese cheese cheese cheese cheese cheese cheese cheese cheese cheese cheese ",
//           "date": "May 3, 2019 12:29 AM",
//           "wasEdited": false,
//           "id": "5cce4b8e62153e495195db95",
//           "blogPostId": "5cce532f8722dd4aedf1ade7",
//           "memberId": "5cce54308722dd4aedf1adec",
//           "steamAvatarId": "https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/8c/8ce8d4325808f6a8030da27cb3d15302b3abd6ce.jpg",
//           "steamNameId": "BladeSe7en [ICON_RESOURCE_FURS]"
//         },
//         {
//           "comment": "Blog Post 1 Ben",
//           "date": "today",
//           "wasEdited": false,
//           "id": "5cce56488722dd4aedf1adf8",
//           "blogPostId": "5cce532f8722dd4aedf1ade7",
//           "memberId": "5cce54308722dd4aedf1adec",
//           "steamAvatarId": "https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/8c/8ce8d4325808f6a8030da27cb3d15302b3abd6ce.jpg",
//           "steamNameId": "BladeSe7en [ICON_RESOURCE_FURS]"
//         },
//         {
//           "comment": "cheese is the best",
//           "date": " May 3, 2019 3:21 AM",
//           "wasEdited": false,
//           "id": "5cce56a18722dd4aedf1adfb",
//           "blogPostId": "5cce532f8722dd4aedf1ade7",
//           "memberId": "5cce520b8722dd4aedf1ade1",
//           "steamAvatarId": "https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/8c/8ce8d4325808f6a8030da27cb3d15302b3abd6ce.jpg",
//           "steamNameId": "BladeSe7en [ICON_RESOURCE_FURS]"
//         }
//       ]
//     },
//     {
//       "blogTitle": "Im on a boat",
//       "blogBody": "im on a cheesey  boat",
//       "date": "May 1, 2019 7:36 PM",
//       "upVotes": 10,
//       "numComments": 2,
//       "id": "5cce536d8722dd4aedf1ade9",
//       "memberId": "5cce520b8722dd4aedf1ade1",
//       "steamNameId": "BladeSe7en",
//       "threadId": [
//         {
//             "comment": "Blog Post 1 Ben",
//             "date": "today",
//             "wasEdited": false,
//             "id": "5cce56488722dd4aedf1adf8",
//             "blogPostId": "5cce532f8722dd4aedf1ade7",
//             "memberId": "5cce54308722dd4aedf1adec",
//             "steamAvatarId": "https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/8c/8ce8d4325808f6a8030da27cb3d15302b3abd6ce.jpg",
//             "steamNameId": "BladeSe7en [ICON_RESOURCE_FURS]"
//           }
//       ]
//     },
//     {
//       "blogTitle": "Title Member 2-1",
//       "blogBody": "Body Member 2-1",
//       "date": "May 1, 2019 7:45 PM",
//       "upVotes": 11,
//       "numComments": 2,
//       "id": "5cce54ec8722dd4aedf1adf0",
//       "memberId": "5cce54308722dd4aedf1adec",
//       "steamNameId": "BladeSe7en",
//       "threadId": [
//         {
//             "comment": "Blog Post 2 Ben",
//             "date": "today",
//             "wasEdited": false,
//             "id": "5cce56688722dd4aedf1adf9",
//             "blogPostId": "5cce536d8722dd4aedf1ade9",
//             "memberId": "5cce54308722dd4aedf1adec",
//             "steamAvatarId": "https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/8c/8ce8d4325808f6a8030da27cb3d15302b3abd6ce.jpg",
//             "steamNameId": "BladeSe7en [ICON_RESOURCE_FURS]"
//           },
//           {
//             "comment": "whats the cheesey boat made out of",
//             "date": " May 3, 2019 3:21 AM",
//             "wasEdited": false,
//             "id": "5cce56d28722dd4aedf1adfd",
//             "blogPostId": "5cce536d8722dd4aedf1ade9",
//             "memberId": "5cce520b8722dd4aedf1ade1",
//             "steamAvatarId": "https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/8c/8ce8d4325808f6a8030da27cb3d15302b3abd6ce.jpg",
//             "steamNameId": "BladeSe7en [ICON_RESOURCE_FURS]"
//           }
//       ]
//     },
//     {
//       "blogTitle": "ben likes cheese",
//       "blogBody": "no I mean ben realllly loves cheese",
//       "date": "May 1, 2019 7:51 PM",
//       "upVotes": -4,
//       "numComments": 2,
//       "id": "5cce54f48722dd4aedf1adf1",
//       "memberId": "5cce54b68722dd4aedf1adef",
//       "steamNameId": "BladeSe7en"
//     },
//     {
//       "blogTitle": "Title Member 2-2",
//       "blogBody": "Body Member 2-2",
//       "date": "May 1, 2019 7:58 PM",
//       "upVotes": -5,
//       "numComments": 1,
//       "id": "5cce54f68722dd4aedf1adf2",
//       "memberId": "5cce54308722dd4aedf1adec",
//       "steamNameId": "BladeSe7en"
//     },
//     {
//       "blogTitle": "Title Member 3-1",
//       "blogBody": "Body Member 3-1",
//       "date": "May 1, 2019 8:06 PM",
//       "upVotes": 7,
//       "numComments": 3,
//       "id": "5cce55288722dd4aedf1adf3",
//       "memberId": "5cce545e8722dd4aedf1aded",
//       "steamNameId": "BladeSe7en"
//     },
//     {
//       "blogTitle": "Title Member 3-2",
//       "blogBody": "Body Member 3-2",
//       "date": "May 1, 2019 8:15 PM",
//       "upVotes": 2,
//       "numComments": 1,
//       "id": "5cce55328722dd4aedf1adf4",
//       "memberId": "5cce545e8722dd4aedf1aded",
//       "steamNameId": "BladeSe7en"
//     },
//     {
//       "blogTitle": "what is beens favorite cheese",
//       "blogBody": "I have been dying to know what is his favorite cheese? does he like all cheese or a only one cheese?",
//       "date": "May 1, 2019 8:36 PM",
//       "upVotes": 2,
//       "numComments": 2,
//       "id": "5cce554e8722dd4aedf1adf5",
//       "memberId": "5cce54b68722dd4aedf1adef",
//       "steamNameId": "BladeSe7en"
//     },
//     {
//       "blogTitle": "Title Member 4-1",
//       "blogBody": "Body Member 4-1",
//       "date": "May 1, 2019 8:46 PM",
//       "upVotes": 2,
//       "numComments": 2,
//       "id": "5cce55748722dd4aedf1adf6",
//       "memberId": "5cce549e8722dd4aedf1adee",
//       "steamNameId": "BladeSe7en"
//     },
//     {
//       "blogTitle": "Title Member 4-2",
//       "blogBody": "Body Member 4-2",
//       "date": "May 1, 2019 9:00 PM",
//       "upVotes": 9,
//       "numComments": 2,
//       "id": "5cce55838722dd4aedf1adf7",
//       "memberId": "5cce549e8722dd4aedf1adee",
//       "steamNameId": "BladeSe7en"
//     },
//     {
//       "blogTitle": "lets eat some cheese",
//       "blogBody": "what is your favorite type of cheese to eat?",
//       "date": "May 1, 2019 9:12 PM",
//       "upVotes": 0,
//       "numComments": 0,
//       "id": "5ccf727fcb0a505666708389",
//       "memberId": "5cce520b8722dd4aedf1ade1",
//       "steamNameId": "BladeSe7en"
//     }
//   ]



// export const addComment = (data, newNum) => {
// 	console.log('DATA1: ',data)
// 	console.log('NEWNUM1: ',newNum)
// 	const accessToken ='5cc16624e810e7579a1581c1'
// 	console.log('DATA2: ',data)
// 	let id = data.blogPostId
// 	let newData = {
// 		"numComments": newNum
// 	}
// 	return {
// 		type: 'ADD_COMMENT',
// 		payload: 
//             axios({
// 			method: 'patch',
// 			url: `api/blogPosts/${id}?access_token=${accessToken}`,
// 			data: newData
//         })      
// 		.then(response => {
//             return response.data
// 		}).then(() => {
// 			axios({
// 				method: 'post',
// 				url: `api/threads?access_token=${accessToken}`,
// 				data: data
// 			})
// 			.then(response => {
// 				return response.data
// 			})
// 		})
// 		.catch(err => err)
//     }
// }