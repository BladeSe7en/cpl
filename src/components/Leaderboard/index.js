import { connect } from 'react-redux';
import Leaderboard from './Leaderboard'

function mapStoreToProps(store){
    return {
    currentPageLeader: store.LeaderPagination.currentPageLeader,
    data             : store.Leaderboard     .data,
    profileId        : store.PlayerProfile   .profileId,
    sortBy           : store.Leaderboard     .sortBy,
    sortOrder        : store.Leaderboard     .sortOrder,
    typeOfGame       : store.Leaderboard     .typeOfGame,
    viewPerPageLeader: store.LeaderPagination.viewPerPageLeader
    };
}

export default connect(mapStoreToProps)(Leaderboard);
