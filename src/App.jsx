import React, { Component } from 'react';
import {
  HashRouter as Router,
  Route
} from 'react-router-dom';
import Home            from './components/Home/Home';
import Meetups         from './components/Meetups';
import AdminLogin      from './components/AdminLogin';
import ConfirmOrCancel from './components/ConfirmOrCancel';
import TalksPage       from './components/TalksPage';
import Organizers      from './components/Organizers';
import Leaderboard     from './components/Leaderboard';
import ForumMain       from './components/ForumMain';
import Newsletters     from './components/Newsletters';
import Faq             from './components/Faq/Faq';
import Rules           from './components/Rules/Rules';
import PlayerProfile   from './components/PlayerProfile';
import Thankyou        from './components/Thankyou';

class App extends Component {
    render() {
        return (
            <Router>
        	<div>
				<Route exact path='/'          component={Home} />
        <Route path='/Admin/Login'     component={AdminLogin} />
        <Route path='/Admin/Meetups'   component={Meetups} />
				<Route path='/Admin/Talks'     component={TalksPage} />
        <Route path='/ConfirmOrCancel' component={ConfirmOrCancel} />
        <Route path='/Organizers'      component={Organizers} />
        <Route path='/Leaderboard'     component={Leaderboard} />
        <Route path='/ForumMain'       component={ForumMain} />
        <Route path='/Newsletters'     component={Newsletters} />
				<Route path='/Faq'             component={Faq} />
        <Route path='/Rules'           component={Rules} />
        <Route path='/Thankyou'        component={Thankyou} />
        <Route path='/PlayerProfile'   component={PlayerProfile} />
			</div>
      </Router>
    );
  }
} 
export default App;
