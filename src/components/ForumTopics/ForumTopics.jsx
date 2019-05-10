import React, { Component } from 'react';
import { Field } from 'react-redux-form';
import ForumThread from '../ForumThread';
import moment from 'moment';
import { thread, getBlogs, getThreadsById, commentCount, addComment, onChange, sortByPopularity } from '../ForumTopics/ForumTopicsActions';
class ForumTopics extends Component {
    constructor(props) {
        super(props);

        this.handleThread         = this.handleThread        .bind(this);
        this.handleGetThreadsById = this.handleGetThreadsById.bind(this);
        this.handleCommentCount   = this.handleCommentCount  .bind(this);
        this.handleAddComment     = this.handleAddComment    .bind(this);
        this.handleChange         = this.handleChange        .bind(this);

    }

    handleSortByPopularity() {
        const { dispatch, sortOrder } = this.props;
        console.log('this is sort order in handle sortby popularity: ',sortOrder)
        dispatch(sortByPopularity(sortOrder));
    }

    handleThread(e) {
        const id = e.target.id;
        const { dispatch, viewingThread } = this.props;
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
        dispatch(getThreadsById(id));
    }

    handleCommentCount(id) {
        console.log('inside handle comment count')
        const { dispatch } = this.props;
        dispatch(commentCount(id));
    }

    handleAddComment(e) {
        console.log('add comment triggered')
        const { dispatch, comment, signedIn } = this.props;
        const date = moment().format('lll');
        let blogId = e.target.name;
        if (signedIn === {} ) {
            console.log('should trigger alert')
            alert('Error: Please Sign In To Post Comments')
        }
        console.log('this is blogId inside add comment: ',blogId)
        console.log('this is signedIn in add comment: ',signedIn)
        console.log('this is signedIn.id: ',signedIn.id)
        const data = {
            "comment": comment,
            "date": date,
            "wasEdited": false,
            "blogPostId": postId,
            "memberId": signedIn.id,
            "steamAvatarId": signedIn.steamAvatarId,
            "steamNameId": signedIn.name
          }
          console.log('this is data: ', data)
        dispatch(addComment(data, blogId));

    }

    handleChange(e) {
        const { dispatch } = this.props;
        dispatch(onChange(e.target.name, e.target.value))
    }

    // handleUpVoting(e) {
    //     const { dispatch, votes } = this.props;
    //     const id = e.target.id;
    //     dispatch(upVote(id, votes))
    // }

    render() {
        const { newTopicActive, viewingThread, id, blogs, count } = this.props;
        const showHideTopic = newTopicActive ? 'topic-active' : 'topic';
        return (
            <div className={showHideTopic}>
                {console.log('blogs in Component: ', blogs)}
                {blogs && blogs.map((blog, i) => {
                    const viewCloseThread = blog.id === id && viewingThread ? 'Close Thread' : 'View Thread'
                    console.log('this is viewCLoseThread=======: ',viewCloseThread)
            
                    let date = Number(blog.date);
                   let newDate = moment(date).format('LLL')
                  //  console.log('this is date: ',newDate)
                    return (
                        <div key={blog.id} className='single-blog'>
                            <h2 className='steam-name'>{blog.steamNameId}</h2>
                            
                            <h2 className='date'>{moment(date).format('LLL')}</h2>
                            <h1>{blog.blogTitle}</h1>
                            <p>{blog.blogBody}</p>
                            <div className='footer'>
                            {/* {console.log('this is blog.threadId-----: ',blog.threadId)} */}
                                <span className='comments'> {blog.numComments} comments</span>
                                <button className='btn toggle-thread' id={blog.id} onClick={this.handleGetThreadsById} >{viewCloseThread}</button>
                                <img className='up-vote' src={'/pics/chevron_up.png'} />
                                <span className='vote'>Vote</span>
                                <img className='down-vote' src={'/pics/chevron_down.png'} />
                                <span className='vote-number'>{blog.upVotes}</span>
                                {/* {console.log('this is blog------------: ', blog)}
                                {console.log('this is blog.steamNameId-------------: ', blog.steamNameId)}
                                {console.log('this is date-----------: ', blog.date)}
                                {console.log('this is blogTitle---------: ', blog.blogTitle)}
                                {console.log('this is blogBody-----------: ', blog.blogBody)}
                                {console.log('this is blog.id-----------: ', blog.id)}
                                {console.log('this is blog.upVotes---------: ', blog.upVotes)} */}
                            </div>
                            {this.renderThread(blog.id)}
                        </div>
                    )
                })}
            </div>
        )
    }

    renderThread(blogId) {
        const { threads, id, viewingThread, comment } = this.props;
        if (blogId === id && viewingThread) {
            return (
                <div className='mapped-thread'>
                    {threads && threads.map(thread => (
                        <div key={thread.id} className='map-child'>
                            <div className='thread-avatar'><img src={thread.steamAvatarId} /> </div>
                            <div className='thread-name'> {thread.steamNameId} </div>
                            <div className='thread-date'> {thread.date} </div>
                            <img className='thread-edit' src={'/pics/edit-icon.png'} onClick={this.handleThreadEdit} />
                            <img className='thread-delete' id={thread.id} src={'/pics/trash-icon.png'} onClick={this.handleThreadDelete} />
                            <div className='thread-comment'>{thread.comment}</div>
                                {/* {console.log('this is thread: ', thread)}
                                {console.log('this is steamAvatarId: ', thread.steamAvatarId)}
                                {console.log('this is steamNameId: ', thread.steamNameId)}
                                {console.log('this is date: ', thread.date)}
                                {console.log('this is steamAvatarId: ', thread.steamAvatarId)}
                                {console.log('this is thread.id: ', thread.id)}
                                {console.log('this is thread.comment: ', thread.comment)} */}





                        </div>
                    ))}
                    <div className='add-new-comment'>
                        <form name={blogId} onSubmit={this.handleAddComment}>
                            <Field model='new-topic-body'>
                                <label htmlFor='new-topic-body'>Add New Comment: </label>
                                <textarea type="text" name="comment" value={comment} required onChange={this.handleChange} />
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