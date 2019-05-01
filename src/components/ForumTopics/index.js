import { connect } from 'react-redux';
import ForumTopics from './ForumTopics';

function mapStoreToProps(store){
    return {
        newTopicActive: store.ForumMain.newTopicActive
    };
}

export default connect(mapStoreToProps)(ForumTopics);
