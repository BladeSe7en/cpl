import { connect } from 'react-redux';
import ForumMain from './ForumMain';

function mapStoreToProps(store){
    return {
     newTopic      : store.ForumMain.newTopic,
     newTopicActive: store.ForumMain.newTopicActive,
     newTopicBody  : store.ForumMain.newTopicBody

    };
}

export default connect(mapStoreToProps)(ForumMain);
