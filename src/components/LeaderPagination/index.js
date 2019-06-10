import { connect } from 'react-redux';
import ThreadPagination from './ThreadPagination'

function mapStoreToProps(store){
    return {
        viewPerPage: store.BlogPagination.viewPerPage,
        currentPage: store.BlogPagination.currentPage,
        lastPage   : store.BlogPagination.lastPage,
        totalCount : store.BlogPagination.totalCount

    };
}

export default connect(mapStoreToProps)(ThreadPagination);
