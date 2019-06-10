import { connect } from 'react-redux';
import ThreadPagination from './ThreadPagination'

function mapStoreToProps(store){
    return {
        viewPerPageThread: store.ThreadPagination.viewPerPageThread,
        currentPageThread: store.ThreadPagination.currentPageThread,
        lastPageThread   : store.ThreadPagination.lastPageThread,
        totalCountThread : store.ThreadPagination.totalCountThread

    };
}

export default connect(mapStoreToProps)(ThreadPagination);
