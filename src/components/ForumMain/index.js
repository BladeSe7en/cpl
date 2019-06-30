import { connect } from 'react-redux';
import ForumMain from './ForumMain';

function mapStoreToProps(store){
    return {
     newTopic       : store.ForumMain     .newTopic,
     newTopicActive : store.ForumMain     .newTopicActive,
     newTopicBody   : store.ForumMain     .newTopicBody,
     signedIn       : store.ForumMain     .signedIn,
     popularityOrder: store.ForumMain     .popularityOrder,
     newPostToggle  : store.ForumMain     .newPostToggle,
     dateOrder      : store.ForumMain     .dateOrder,
     comment        : store.ForumTopics   .comment,
     totalCountBlog : store.BlogPagination.totalCountBlog,
     currentPageBlog: store.BlogPagination.currentPageBlog
    };
}

export default connect(mapStoreToProps)(ForumMain);
