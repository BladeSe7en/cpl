import { connect } from 'react-redux';
import ForumTopics from './ForumTopics';

function mapStoreToProps(store){
    return {
       viewingThread: store.ForumTopics.viewingThread
    };
}

export default connect(mapStoreToProps)(ForumTopics);
