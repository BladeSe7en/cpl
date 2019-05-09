import { connect } from 'react-redux';
import ForumTopics from './ForumTopics';
function mapStoreToProps(store){
    return {
       viewingThread : store.ForumTopics.viewingThread,
       newTopicActive: store.ForumMain  .newTopicActive,
       blogs         : store.ForumTopics.blogs,
       threads       : store.ForumTopics.threads,
       id            : store.ForumTopics.id,
       number        : store.ForumTopics.number,
       signedIn      : store.ForumMain  .signedIn,
       comment       : store.ForumTopics.comment,
       count         : store.ForumTopics.count,
       sortOrder     : store.Leaderboard.sortOrder
    };
}

export default connect(mapStoreToProps)(ForumTopics);
