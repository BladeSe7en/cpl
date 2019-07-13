import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from "react-router";
import { postLogout } from './AdminNavActions';
import { checkToken } from '../AdminLogin/AdminLoginActions';

class AdminNavbar extends Component {
    constructor(props) {
        super(props);
        this.handleLogout = this.handleLogout.bind(this);
    }

    componentDidMount() {
		const { dispatch, accessToken } = this.props;
		dispatch(checkToken(accessToken));
	}

    // handleLogout() {
    //     const { dispatch, accessToken } = this.props;
    //     dispatch(postLogout(accessToken));
    // }

    render() {
        const { location } = this.props;
        return (
            <div className='navbar'>
                <img className='logo' src='/pics/civplayers-logo-white.svg' />
                <div className='nav-items' >
                    <Link to='/Admin/Meetups' className={location.pathname === '/Admin/Meetups' ? 'nav-item w--current' : 'nav-item'}>Meetups</Link>
                    <Link to='/Admin/Talks' className={location.pathname === '/Admin/Talks' ? 'nav-item w--current' : 'nav-item'}>Talks</Link>
                    <Link to='/Organizers' className={location.pathname === '/Admins' ? 'nav-item w--current' : 'nav-item'}>Admins</Link>
                    <Link to='/Account' className={location.pathname === '/Account' ? 'nav-item w--current' : 'nav-item'}>Account</Link>
                    <Link to='/' onClick={this.handleLogout} className='nav-item'>LOG OUT</Link>
                </div>
            </div>
        )
    }
}

export default withRouter(AdminNavbar);
