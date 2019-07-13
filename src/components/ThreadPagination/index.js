import { connect } from 'react-redux';
import ThreadPagination from './ThreadPagination'

function mapStoreToProps(store){
    return {
        currentPageThread: store.ThreadPagination.currentPageThread,
        lastPageThread   : store.ThreadPagination.lastPageThread,
        totalCountThread : store.ThreadPagination.totalCountThread,
        viewPerPageThread: store.ThreadPagination.viewPerPageThread,
        viewingThreadId  : store.ForumTopics     .viewingThreadId
    };
}

export default connect(mapStoreToProps)(ThreadPagination);
