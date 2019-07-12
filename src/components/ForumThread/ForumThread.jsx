import React from 'react';
import { threadEdit, threadDelete } from './ForumThreadActions';

const ForumThread = ({blog, dispatch}) => (
    <div className='thread'>
        <h1>test forum</h1>
            {blog && blog.map(blog => {
                <div className='mapped-thread'>
                    <div className='thread-edit' id={blog.blogThread.id} onClick={evt => dispatch(threadEdit(evt.target.id))}></div>
                    <div className='thread-delete' id={blog.blogThread.id} onClick={evt => dispatch(threadDelete(evt.target.id))}></div>
                    <div className='thread-avatar'> {blog.blogThread.avatar} </div>
                    <div className='thread-date'> {blog.blogThread.date} </div>
                    <div className='thread-name'> {blog.blogThread.name} </div>
                </div>
            })}
    </div>)

export default ForumThread;
