import { connect } from 'react-redux';
import Pagination from './Pagination'

function mapStoreToProps(store){
    return {
        viewPerPage: store.Pagination.viewPerPage,
        currentPage: store.Pagination.currentPage,
        lastPage   : store.Pagination.lastPage,
        totalCount : store.Pagination.totalCount

    };
}

export default connect(mapStoreToProps)(Pagination);
