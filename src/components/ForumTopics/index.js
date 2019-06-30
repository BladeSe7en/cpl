import { connect } from 'react-redux';
import ForumTopics from './ForumTopics';
function mapStoreToProps(store){
    return {
       blogs            : store.ForumTopics     .blogs,
       blogId           : store.ForumTopics     .blogId,
       comment          : store.ForumTopics     .comment,
       editingComment   : store.ForumTopics     .editingComment,
       viewingThread    : store.ForumTopics     .viewingThread,
       editingCommentId : store.ForumTopics     .editingCommentId,
       newTopicActive   : store.ForumMain       .newTopicActive,
       threads          : store.ForumTopics     .threads,
       number           : store.ForumTopics     .number,
       signedIn         : store.ForumMain       .signedIn,
       sortOrder        : store.Leaderboard     .sortOrder,
       viewingThreadId  : store.ForumTopics     .viewingThreadId,
       editingBlog      : store.ForumTopics     .editingBlogId,
       editingBlogId    : store.ForumTopics     .editingBlogId,
       newBlogTitle     : store.ForumTopics     .newBlogTitle,
       newBlogBody      : store.ForumTopics     .newBlogBody,
       viewPerPageBlog  : store.BlogPagination  .viewPerPageBlog,
       viewPerPageThread: store.ThreadPagination.viewPerPageThread,
       totalCountBlog   : store.BlogPagination  .totalCountBlog,
       currentPageBlog  : store.BlogPagination  .currentPageBlog,
       currentPageThread: store.ThreadPagination.lastPageThread
    };
}

export default connect(mapStoreToProps)(ForumTopics);
