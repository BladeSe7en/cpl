import { connect } from 'react-redux';
import ForumTopics from './ForumTopics';

function mapStoreToProps(store){
    return {
       viewingThread : store.ForumTopics.viewingThread,
       newTopicActive: store.ForumMain  .newTopicActive,
       blogs         : store.ForumTopics.blogs,
       threads       : store.ForumTopics.threads,
       id            : store.ForumTopics.id
    };
}

export default connect(mapStoreToProps)(ForumTopics);
