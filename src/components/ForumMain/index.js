import { connect } from 'react-redux';
import ForumMain from './ForumMain';

function mapStoreToProps(store){
    return {
     comment        : store.ForumTopics   .comment,
     currentPageBlog: store.BlogPagination.currentPageBlog,
     dateOrder      : store.ForumMain     .dateOrder,
     newPostToggle  : store.ForumMain     .newPostToggle,
     newTopic       : store.ForumMain     .newTopic,
     newTopicActive : store.ForumMain     .newTopicActive,
     newTopicBody   : store.ForumMain     .newTopicBody,
     popularityOrder: store.ForumMain     .popularityOrder,
     signedIn       : store.ForumMain     .signedIn,
     totalCountBlog : store.BlogPagination.totalCountBlog
    };
}

export default connect(mapStoreToProps)(ForumMain);
