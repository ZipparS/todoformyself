import React, { Component } from 'react';
import { connect } from 'react-redux';
import {actionType} from '../../actions/action-type';

import { NotificationContainer } from './notification-container';
import './notification.css';

class NotificationHOC extends Component {
    render() {
        const { notification, removeNotification } = this.props;

        return (
            notification.length
                ? <div className="Notification">
                    {
                        notification.map((item, index) => (
                            <div className="Notification__item" key={index} >
                                <NotificationContainer
                                    message={item.message}
                                    variant={item.variant}
                                    delay={item.delay}
                                    removeNotification={removeNotification}
                                />
                            </div>
                        ))
                    }
                </div>
                : null
        );
    }
}

export const Notification = connect(
    store => ({notification: store.notification}),
    dispatch => ({
        removeNotification: id => dispatch({type: actionType.REMOVE_NOTIFICATION, payload: id})
    })
)(NotificationHOC);