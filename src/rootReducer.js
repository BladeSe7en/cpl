import { combineReducers }     from 'redux';
import AdminLoginReducer       from './components/AdminLogin/AdminLoginReducer';
import ConfimOrCancelReducer   from './components/ConfirmOrCancel/ConfirmOrCancelReducer';
import ForumMainReducer        from './components/ForumMain/ForumMainReducer'
import OrganizersReducer       from './components/Organizers/OrganizersReducer';
import LeaderboardReducer      from './components/Leaderboard/LeaderboardReducer';
import TalksPageReducer        from './components/TalksPage/TalksPageReducer';
import MeetupsReducer          from './components/Meetups/MeetupsReducer';
import NewslettersReducer      from './components/Newsletters/NewslettersReducer';
import PlayerProfileReducer    from './components/PlayerProfile/PlayerProfileReducer';

const rootReducer = combineReducers({
    AdminLogin       : AdminLoginReducer,
    ConfirmOrCancel  : ConfimOrCancelReducer,
    ForumMain        : ForumMainReducer,
    Organizers       : OrganizersReducer,
    Leaderboard      : LeaderboardReducer,
    TalksPage        : TalksPageReducer, 
    MeetupsReducer   : MeetupsReducer,
    Newsletters      : NewslettersReducer,
    PlayerProfile    : PlayerProfileReducer
});

export default rootReducer; 
