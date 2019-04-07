import { connect } from 'react-redux';
import PlayerProfile from './PlayerProfile'

function mapStoreToProps(store){
    return {
        profileData: store.PlayerProfile.profileData

    };
}

export default connect(mapStoreToProps)(PlayerProfile);
