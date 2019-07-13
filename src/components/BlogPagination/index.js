import { connect } from 'react-redux';
import BlogPagination from './BlogPagination'

function mapStoreToProps(store){
    return {
        currentPageBlog: store.BlogPagination.currentPageBlog,
        lastPageBlog   : store.BlogPagination.lastPageBlog,
        totalCountBlog : store.BlogPagination.totalCountBlog,
        viewPerPageBlog: store.BlogPagination.viewPerPageBlog

    };
}

export default connect(mapStoreToProps)(BlogPagination);
