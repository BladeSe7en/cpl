import { connect } from 'react-redux';
import LeaderPagination from './LeaderPagination'

function mapStoreToProps(store){
    return {
        currentPageLeader: store.LeaderPagination.currentPageLeader,
        lastPageLeader   : store.LeaderPagination.lastPageLeader,
        sortBy           : store.Leaderboard     .sortBy,
        sortOrder        : store.Leaderboard     .sortOrder,
        totalCountLeader : store.LeaderPagination.totalCountLeader,
        viewPerPageLeader: store.LeaderPagination.viewPerPageLeader
    };
}

export default connect(mapStoreToProps)(LeaderPagination);
