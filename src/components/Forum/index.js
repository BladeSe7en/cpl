import { connect } from 'react-redux';
import Forum from './Forum';

function mapStoreToProps(store){
    return {
     something: store.Forum.something
    };
}

export default connect(mapStoreToProps)(Forum);
