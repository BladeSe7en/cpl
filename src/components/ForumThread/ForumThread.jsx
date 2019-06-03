import React, { Component } from 'react';
import { threadEdit, threadDelete } from './ForumThreadActions';
class ForumThread extends Component {
    constructor(props) {
        super(props);

        this.handleThreadEdit   = this.handleThreadEdit  .bind(this);
        this.handleThreadDelete = this.handleThreadDelete.bind(this);
    }

    handleThreadEdit(e) {
        const { dispatch } = this.props;
        dispatch(threadEdit(e.target.id))
    }

    handleThreadDelete(e) {
        const { dispatch } = this.props;
        dispatch(threadDelete(e.target.id))
    }

    render() {
        const { blog } = this.props;
        return (
            <div className='thread'>
            <h1>test forum</h1>
                {blog && blog.map(blog => {
                    <div className='mapped-thread'>
                        <div className='thread-edit' id={blog.blogThread.id} onClick={this.handleThreadEdit}></div>
                        <div className='thread-delete' id={blog.blogThread.id} onClick={this.handleThreadDelete}></div>
                        <div className='thread-avatar'> {blog.blogThread.avatar} </div>
                        <div className='thread-date'> {blog.blogThread.date} </div>
                        <div className='thread-name'> {blog.blogThread.name} </div>
                    </div>
                })}

            </div>
        )
    }
}

export default ForumThread;
