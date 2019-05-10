import { connect } from 'react-redux';
import ForumMain from './ForumMain';

function mapStoreToProps(store){
    return {
     newTopic       : store.ForumMain.newTopic,
     newTopicActive : store.ForumMain.newTopicActive,
     newTopicBody   : store.ForumMain.newTopicBody,
     signedIn       : store.ForumMain.signedIn,
     popularityOrder: store.ForumMain.popularityOrder,
     newPostToggle  : store.ForumMain.newPostToggle,
     dateOrder      : store.ForumMain.dateOrder
    };
}

export default connect(mapStoreToProps)(ForumMain);
