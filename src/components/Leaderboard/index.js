import { connect } from 'react-redux';
import Leaderboard from './Leaderboard'

function mapStoreToProps(store){
    return {
    typeOfGame: store.Leaderboard.typeOfGame,
    sortOrder: store.Leaderboard.sortOrder,
    sortBy: store.Leaderboard.sortBy,
    data: store.Leaderboard.data,
    profile: store.Leaderboard.profile
    };
}

export default connect(mapStoreToProps)(Leaderboard);
