import { connect } from 'react-redux';
import Newsletters from './Newsletters';

function mapStoreToProps(store){
    return {
       currentPageNews: store.Newsletters.currentPageNews,
       firstMonth     : store.Newsletters.firstMonth,
       isLoading      : store.Newsletters.isLoading,
       lastMonth      : store.Newsletters.lastMonth,
       months         : store.Newsletters.months,
       news           : store.Newsletters.news,
       pageInView     : store.Newsletters.pageInView,
       scrollingPage  : store.Newsletters.scrollingPage
    };
}

export default connect(mapStoreToProps)(Newsletters);
