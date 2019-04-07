import React, { Component } from 'react';
import { Redirect } from 'react-router';
import { getEvents } from './MeetupsActions';
import AdminNav from '../AdminNav';

class Meetups extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='top-div'>
                <AdminNav />
                <div className='meetups'>
                    <h1>Nothing here yet</h1>
                </div>
            </div>
        )
    }
}

export default Meetups
