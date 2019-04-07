import { connect } from 'react-redux';
import Leaderboard from './Leaderboard'

function mapStoreToProps(store){
    return {
    typeOfGame: store.Leaderboard.typeOfGame,
    sortOrder : store.Leaderboard.sortOrder,
    sortBy    : store.Leaderboard.sortBy,
    data      : store.Leaderboard.data,
    profileId : store.PlayerProfile.profileId
    };
}

export default connect(mapStoreToProps)(Leaderboard);
