import React, { Component } from 'react';
import { Redirect } from 'react-router';
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
        <div className='banner-opacity'>
            <h1>Nothing here yet</h1>
        </div>
        </div>
    </div>
      )
    }
}

export default Newsletters;
