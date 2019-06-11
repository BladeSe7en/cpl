import { connect } from 'react-redux';
import Leaderboard from './Leaderboard'

function mapStoreToProps(store){
    return {
    viewPerPageLeader: store.LeaderPagination.viewPerPageLeader,
    currentPageLeader: store.LeaderPagination.currentPageLeader,
    typeOfGame       : store.Leaderboard     .typeOfGame,
    sortOrder        : store.Leaderboard     .sortOrder,
    sortBy           : store.Leaderboard     .sortBy,
    data             : store.Leaderboard     .data,
    profileId        : store.PlayerProfile   .profileId
    };
}

export default connect(mapStoreToProps)(Leaderboard);
