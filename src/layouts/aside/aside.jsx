import React, { Component } from 'react';
import { connect } from 'react-redux';

import { CategoryList } from '../../elements/category-list';
import { InputWithButton } from '../../elements/inputs';
import { actionType } from '../../actions/action-type';
import './aside.css';
import {notificationType} from "../../elements/notification";

class AsideComponent extends Component {
    handleCreateCategory = (catName) => {
        const { createCategory, addNotification } = this.props;
        const notificationOptions = {
            message: 'New category created',
            variant: notificationType.INFO
        };

        createCategory(catName);
        addNotification(notificationOptions);
    };

    render() {
        return (
            <aside className="Todo-aside">
                <div className="Todo-aside__top">
                    <InputWithButton onClick={this.handleCreateCategory}/>
                </div>
                <div className="Todo-aside__middle">
                    <CategoryList />
                </div>
            </aside>
        );
    }
}

export const Aside = connect(null,
    dispatch => ({
        createCategory: catName => dispatch({type: actionType.CREATE_CATEGORY, payload: catName}),
        addNotification: params => dispatch({type: actionType.ADD_NOTIFICATION, payload: params})
    })
)(AsideComponent);
