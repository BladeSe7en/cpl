import React, { Component } from 'react';
import { Redirect }         from 'react-router';
import Navbar               from '../Navbar/Navbar';

class ConfirmOrCancel extends Component {
    constructor(props) {
        super(props)
    }
    
    render() { 
        return (
            <div>
                <Navbar />
                <div id=''>
                   <h1>nothing here yet</h1>
                </div>
            </div>
        )
    }
}

export default ConfirmOrCancel;
