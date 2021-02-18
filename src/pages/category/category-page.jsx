import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Aside, Main } from '../../layouts';
import {actionType} from '../../actions/action-type';
import { getStoreItems, fakeLogin } from '../../services';

class CategoryPageComponent extends Component {
    componentDidMount() {
        const { addCategory, logged, addTasks } = this.props;
        const isAuth = fakeLogin.isAuth();

        if (isAuth) {
            addCategory(getStoreItems('category'));
            addTasks(getStoreItems('tasks'));
            logged(isAuth);
        }
    }

    render() {
        return (
            <div className="Todo-content-layout__inner">
                <Aside />
                <Main />
            </div>
        );
    }
}

export const CategoryPage = connect(null,
    dispatch => ({
        addCategory: allCategory => dispatch({type: actionType.ADD_ALL_CATEGORY, payload: allCategory}),
        addTasks: allTasks => dispatch({type: actionType.ADD_ALL_TASKS, payload: allTasks}),
        logged: isLogin => dispatch({type: actionType.LOGIN, payload: isLogin}),
    })
)(CategoryPageComponent);
