import React, { Component } from 'react';
import Navbar from '../Navbar/Navbar';
import ForumThread from '../ForumThread';

class ForumTopics extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
                <div className='topic'>
                        <h1>this is a forum topic</h1>
                    <ForumThread />
                </div>
        )
    }
}

export default ForumTopics
