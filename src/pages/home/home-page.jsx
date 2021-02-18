import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from "react-router-dom";

import { fakeLogin } from '../../services';
import {actionType} from '../../actions/action-type';
import './home.css';

class HomePageComponent extends Component {
    componentDidMount() {
        const { logged, addUser, addCategory, addTasks } = this.props;
        const isAuth = fakeLogin.isAuth();

        if (isAuth) {
            const category = window.sessionStorage.getItem('category');
            const tasks = window.sessionStorage.getItem('tasks');
            const user = JSON.parse(window.sessionStorage.getItem('user'));

            addUser({login: user, name: user});
            addCategory(JSON.parse(category));
            addTasks(JSON.parse(tasks));
            logged(isAuth);
        }
    }

    render() {
        const { isLogin } = this.props;

        return (
            <div className="Home-page">
                <h2 className="Home-page__heading">Welcome in ToDoElka Application</h2>
                <div className="Home-page__content">
                    <p className="Home-page__text">
                        {
                            isLogin
                                ? <span><Link to="/category">Your category</Link></span>
                                : <span><Link to="/login">Login</Link> or <Link to="/Register">Register</Link></span>
                        }
                    </p>
                </div>
            </div>
        );
    }
}

export const HomePage = connect(
    store => ({
        isLogin: store.services.isLogin
    }),
    dispatch => ({
        logged: isLogin => dispatch({type: actionType.LOGIN, payload: isLogin}),
        addCategory: allCategory => dispatch({type: actionType.ADD_ALL_CATEGORY, payload: allCategory}),
        addTasks: allTasks => dispatch({type: actionType.ADD_ALL_TASKS, payload: allTasks}),
        addUser: user => dispatch({type: actionType.ADD_USER, payload: user})
    })
)(HomePageComponent);