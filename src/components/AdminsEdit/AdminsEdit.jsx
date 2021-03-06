
// this component is probably not needed anymore. With the way we are logging in admins via thier steam account and the admin role all we need to do
// is have a button/action in the Admin page to add or remove the admin role from the player


import React, { Component } from 'react';
import { Field } from 'react-redux-form';

export default class AdminsEdit extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: props.id,
            username: null,
            email: null,
            password: null,
            phone: props.admin.phone
        }

        this.handleAdminUpdate = this.handleAdminUpdate.bind(this);
        this.handleUpdate = this.handleUpdate.bind(this);
    }

    handleUpdate(e) {
        e.preventDefault();

        let jsonObject = {};

        for (let property in this.state) {
            if (this.state[property] && property !== 'id') {
                jsonObject[property] = this.state[property];
            }
        }

        if (Object.keys(jsonObject).length === 0) {
            return this.props.toggleEdit();
        }

        this.props.onSubmit(this.state.id, this.props.index, jsonObject);
    }

    handleAdminUpdate(e) {
        this.setState({ [e.target.id]: e.target.value });
    }

    render() {
        const { admin, toggleEdit } = this.props;
        return (
            <div className='organizer-edit-section'>
                <form id='organizer-edit-form' onSubmit={this.handleUpdate}>
                    <i className="fas fa-times" name={admin.id} onClick={toggleEdit}></i>
                    <Field model='user.name'>
                        <label htmlFor='username'>Name: </label>
                        <input id='username' type='text' value={admin.username} onChange={this.handleAdminUpdate} />
                    </Field >
                    <Field model='user.admin-email'>
                        <label htmlFor='email'>Email: </label>
                        <input type="email" id='email' value={admin.email} onChange={this.handleAdminUpdate} />
                    </Field >
                    <Field model='user.admin-phone'>
                        <label htmlFor='phone'>Phone: </label>
                        <input type="tel" id='phone' pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" placeholder={admin.phone.replace(/(\d{3})\-?(\d{3})\-?(\d{4})/, '$1-$2-$3')} value={this.state.phone.replace(/(\d{3})\-?(\d{3})\-?(\d{4})/, '$1-$2-$3')} format="### ### ####" onChange={this.handleAdminUpdate} />
                    </Field >
                    <Field model='user.admin-password'>
                        <label htmlFor='password'>Password: </label>
                        <input type="password" id='password' placeholder='********' onChange={this.handleAdminUpdate} />
                    </Field>
                    <button className='btn' id='admin-submit'>Save</button>
                </form>
            </div>)
    }
}
