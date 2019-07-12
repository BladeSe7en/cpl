import { combineReducers }     from 'redux';
import AdminLoginReducer       from './components/AdminLogin/AdminLoginReducer';
import ForumMainReducer        from './components/ForumMain/ForumMainReducer'
import AdminsReducer           from './components/Admins/AdminsReducer';
import LeaderboardReducer      from './components/Leaderboard/LeaderboardReducer';
import NewslettersReducer      from './components/Newsletters/NewslettersReducer';
import PlayerProfileReducer    from './components/PlayerProfile/PlayerProfileReducer';
import ForumTopicsReducer      from './components/ForumTopics/ForumTopicsReducer';
import BlogPaginationReducer   from './components/BlogPagination/BlogPaginationReducer';
import LeaderPaginationReducer from './components/LeaderPagination/LeaderPaginationReducer';
import ThreadPaginationReducer from './components/ThreadPagination/ThreadPaginationReducer';

const rootReducer = combineReducers({
    AdminLogin      : AdminLoginReducer,
    ForumMain       : ForumMainReducer,
    ForumTopics     : ForumTopicsReducer,
    Admins          : AdminsReducer,
    Leaderboard     : LeaderboardReducer,
    Newsletters     : NewslettersReducer,
    PlayerProfile   : PlayerProfileReducer,
    BlogPagination  : BlogPaginationReducer,
    LeaderPagination: LeaderPaginationReducer,
    ThreadPagination: ThreadPaginationReducer,

});

export default rootReducer; 
