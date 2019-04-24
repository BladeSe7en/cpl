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
                <div className='banner'>
                    <div className='banner-opacity-home'>
                        <h1>Nothing here yet</h1>
                    </div>
                </div>
            </div>
        )
    }
}

export default ForumLogin
