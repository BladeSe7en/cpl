import { connect } from 'react-redux';
import ForumTopics from './ForumTopics';
function mapStoreToProps(store){
    return {
       blogId           : store.ForumTopics     .blogId,
       blogs            : store.ForumTopics     .blogs,
       comment          : store.ForumTopics     .comment,
       currentPageBlog  : store.BlogPagination  .currentPageBlog,
       currentPageThread: store.ThreadPagination.lastPageThread,
       editingBlog      : store.ForumTopics     .editingBlogId,
       editingBlogId    : store.ForumTopics     .editingBlogId,
       editingComment   : store.ForumTopics     .editingComment,
       editingCommentId : store.ForumTopics     .editingCommentId,
       newBlogBody      : store.ForumTopics     .newBlogBody,
       newBlogTitle     : store.ForumTopics     .newBlogTitle,
       newTopicActive   : store.ForumMain       .newTopicActive,
       number           : store.ForumTopics     .number,
       signedIn         : store.ForumMain       .signedIn,
       sortOrder        : store.Leaderboard     .sortOrder,
       totalCountBlog   : store.BlogPagination  .totalCountBlog,
       threads          : store.ForumTopics     .threads,
       viewingThread    : store.ForumTopics     .viewingThread,
       viewingThreadId  : store.ForumTopics     .viewingThreadId,
       viewPerPageBlog  : store.BlogPagination  .viewPerPageBlog,
       viewPerPageThread: store.ThreadPagination.viewPerPageThread
    };
}

export default connect(mapStoreToProps)(ForumTopics);
