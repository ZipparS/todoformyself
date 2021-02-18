import React, { Component } from 'react';
import { connect } from 'react-redux';

import { NewTaskButton } from '../../elements/buttons';
import { UserAccount } from '../../elements/user-account';
import {fakeLogin, getStoreItems} from '../../services';
import './header.css';
import {actionType} from "../../actions/action-type";

class HeaderComponent extends Component {
    componentDidMount() {
        const { addUser } = this.props;
        const isAuth = fakeLogin.isAuth();

        if (isAuth) {
            addUser(getStoreItems('user'));
        }
    }

    render() {
        const { user, isLoginStore } = this.props;
        const isLogin = fakeLogin.isAuth() || isLoginStore;
        const headerText = isLogin ? `Hello ${user.name}` : 'ToDoElka';

        return (
            <header className="Todo-header">
                <div className="Todo-header__column Todo-header__column--3">
                    {isLogin && <NewTaskButton />}
                </div>
                <div className="Todo-header__column Todo-header__column--3 Todo-header__column--center">
                    <h2 className="Todo-header__heading">
                        {headerText}
                    </h2>
                </div>
                <div className="Todo-header__column Todo-header__column--3 Todo-header__column--right">
                    <div className="Todo-header__user">
                        {isLogin && <UserAccount />}
                    </div>
                </div>
            </header>
        )
    }
}

export const Header = connect(
    store => ({
        user: store.user,
        isLoginStore: store.services.isLogin
    }),
    dispatch => ({
        addUser: user => dispatch({type: actionType.ADD_USER, payload: user})
    })
)(HeaderComponent);
