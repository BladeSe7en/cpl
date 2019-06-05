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
                    <Link to='/Rules' className={location.pathname === '/Rules' ? 'nav-item w--current' : 'nav-item'}>
                        RULES
                    </Link>
                    <Link to='/Leaderboard' className={location.pathname === '/Leaderboard' ? 'nav-item w--current' : 'nav-item'}>
                        LEADERBOARD
                    </Link>
                    <Link to='/ForumMain' className={location.pathname === '/ForumMain' ? 'nav-item w--current' : 'nav-item'}>
                        FORUM
                    </Link>
                    <Link to='/Newsletters' className={location.pathname === '/Newsletters' ? 'nav-item w--current' : 'nav-item'}>
                        NEWSLETTERS
                    </Link>
                   <a className='nav-item' href="/authenticateAdmin" >Admin</a>
                </div>
            </div>
        </div>
    )
}

export default withRouter(Navbar);
