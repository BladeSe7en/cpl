import { connect } from 'react-redux';
import ForumMain from './ForumMain';

function mapStoreToProps(store){
    return {
     something: store.ForumMain.something
    };
}

export default connect(mapStoreToProps)(ForumMain);
