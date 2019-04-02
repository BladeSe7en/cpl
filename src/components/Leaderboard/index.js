import { connect } from 'react-redux';
import Leaderboard from './Leaderboard'

function mapStoreToProps(store){
    return {
    gameType: store.Leaderboard.gameType
    };
}

export default connect(mapStoreToProps)(Leaderboard);
