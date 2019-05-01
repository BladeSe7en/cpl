import React, { Component } from 'react';
import Navbar from '../Navbar/Navbar';
class ForumThread extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='thread'>
            <h1>this is a thread</h1>
                {/* <Navbar />
                <div className='banner'>
                    <div className='banner-opacity-home'>
                        <div className='panel'>
                            <div className='add-new-topic'>
                                <textarea className='new-topic-text' />
                                <button className='post-btn'>Submit</button>
                            </div>
                        </div>
                    </div>
                </div> */}
            </div>
        )
    }
}

export default ForumThread;
