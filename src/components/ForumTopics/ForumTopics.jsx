import React, { Component } from 'react';
import ForumThread from '../ForumThread';

class ForumTopics extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { newTopicActive } = this.props;
        const showHideTopic = newTopicActive ? 'topic-active' : 'topic';
        return (
            <div className={showHideTopic}>
            {console.log('this is showHideTopic: ',showHideTopic)}
                        <h1>this is a forum topic title</h1>
                            <p>this is where the body of the original posting goes</p>
                    <ForumThread />
                </div>
        )
    }
}

export default ForumTopics
