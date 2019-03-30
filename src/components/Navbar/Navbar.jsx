import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from "react-router";

const Navbar = props => {
    const { location } = props;
    return (
        <div className='home-nav'>
            <div className='navbar'>

                <img className='logo' src='./pics/cpl_logo_black.png' />

                <div className='nav-items' >
                    <Link to='/' className={location.pathname === '/' ? 'nav-item w--current' : 'nav-item'}>
                        HOME
                    </Link>
                    <Link to='/Faq' className={location.pathname === '/Faq' ? 'nav-item w--current' : 'nav-item'}>
                        FAQ
                    </Link>
                    <Link to='/Connect' className={location.pathname === '/rules' ? 'nav-item w--current' : 'nav-item'}>
                        RULES
                    </Link>
                    <Link to='/Shirts' className={location.pathname === '/leaderboard' ? 'nav-item w--current' : 'nav-item'}>
                        LEADERBOARD
                    </Link>
                    <Link to='/Learn' className={location.pathname === '/forum' ? 'nav-item w--current' : 'nav-item'}>
                        FORUM
                    </Link>
                    <Link to='/Jobs' className={location.pathname === '/newsletter' ? 'nav-item w--current' : 'nav-item'}>
                        NEWSLETTERS
                    </Link>
                    <Link to='/Admin/Login' className={location.pathname === '/Admin/Login' ? 'nav-item w--current' : 'nav-item'}>
                        ADMIN
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default withRouter(Navbar);
