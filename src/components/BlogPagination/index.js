import { connect } from 'react-redux';
import BlogPagination from './BlogPagination'

function mapStoreToProps(store){
    return {
        viewPerPageBlog: store.BlogPagination.viewPerPageBlog,
        currentPageBlog: store.BlogPagination.currentPageBlog,
        lastPageBlog   : store.BlogPagination.lastPageBlog,
        totalCountBlog : store.BlogPagination.totalCountBlog

    };
}

export default connect(mapStoreToProps)(BlogPagination);
