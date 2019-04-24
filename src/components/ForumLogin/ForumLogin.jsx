import React, { Component } from 'react';
import Navbar from '../Navbar/Navbar';
class ForumLogin extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Navbar />
                <div className='forum-login'>
                        <h1>this is the forum login</h1>
                </div>
            </div>
        )
    }
}

export default ForumLogin
