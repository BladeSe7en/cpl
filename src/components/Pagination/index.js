import { connect } from 'react-redux';
import Pagination from './Pagination'

function mapStoreToProps(store){
    return {
        viewPerPage: store.Pagination.viewPerPage,
        currentPage: store.Pagination.currentPage
    };
}

export default connect(mapStoreToProps)(Pagination);
