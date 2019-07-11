import { connect } from 'react-redux';
import Newsletters from './Newsletters';

function mapStoreToProps(store){
    return {
       news           : store.Newsletters.news,
       months         : store.Newsletters.months,
       isLoading      : store.Newsletters.isLoading,
       scrollingPage  : store.Newsletters.scrollingPage,
       firstMonth     : store.Newsletters.firstMonth,
       lastMonth      : store.Newsletters.lastMonth,
       currentPageNews: store.Newsletters.currentPageNews,
       pageInView     : store.Newsletters.pageInView
    };
}

export default connect(mapStoreToProps)(Newsletters);
