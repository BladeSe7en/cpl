import React, { Component } from 'react';
import { Redirect } from 'react-router';
import moment from 'moment';
import Navbar from '../Navbar/Navbar';

class Newsletters extends Component {
  constructor(props) {
    super(props);
  }

  render() {
      return (
        <div>
        <Navbar />
        <div className='banner'>
            <h1>Nothing here yet</h1>
        </div>
    </div>
      )
    }
}

export default Newsletters;
