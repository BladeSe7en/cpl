import { connect } from 'react-redux';
import Admins from './Admins';

function mapStoreToProps(store){
    return {
        accessToken     : store.AdminLogin.accessToken,
        adminList       : store.Admins    .adminList,
        authorized      : store.AdminLogin.authorized,
        newAdminEmail   : store.Admins    .newAdminEmail,
        newAdminName    : store.Admins    .newAdminName,
        newAdminPhone   : store.Admins    .newAdminPhone,
        newAdminPassword: store.Admins    .newAdminPassword
    };
}

export default connect(mapStoreToProps)(Admins); 
