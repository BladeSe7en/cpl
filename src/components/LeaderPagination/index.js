import { connect } from 'react-redux';
import LeaderPagination from './LeaderPagination'

function mapStoreToProps(store){
    return {
        viewPerPageLeader: store.LeaderPagination.viewPerPageLeader,
        currentPageLeader: store.LeaderPagination.currentPageLeader,
        lastPageLeader   : store.LeaderPagination.lastPageLeader,
        totalCountLeader : store.LeaderPagination.totalCountLeader,
        sortOrder        : store.Leaderboard     .sortOrder,
        sortBy           : store.Leaderboard     .sortBy,
    };
}

export default connect(mapStoreToProps)(LeaderPagination);
