import { connect } from 'react-redux';
import Admins from './Admins';

function mapStoreToProps(store){
    return {
        adminList       : store.Admins    .adminList,
        newAdminName    : store.Admins    .newAdminName,
        newAdminPhone   : store.Admins    .newAdminPhone,
        newAdminEmail   : store.Admins    .newAdminEmail,
        newAdminPassword: store.Admins    .newAdminPassword,
        accessToken     : store.AdminLogin.accessToken,
        authorized      : store.AdminLogin.authorized
    };
}

export default connect(mapStoreToProps)(Admins); 
