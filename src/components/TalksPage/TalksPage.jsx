import React, { Component } from 'react';
import { handleOwnerFilter } from './TalksPageActions';
import { getAdmins } from '../Organizers/OrganizersActions'
import Talks from '../Talks';
import PastTalks from '../PastTalks';
import AdminNav from '../AdminNav';

class TalksPage extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='top-div'>
                <AdminNav />
                <div className='talks-page-container'>
                <h1>hi</h1>
                </div>
            </div>
        )
    }
}

export default TalksPage;
