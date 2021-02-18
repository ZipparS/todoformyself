import React, { Component } from 'react';

import { NotificationComponent } from './notification';

const HIDE_DURATION = 6000;

export class NotificationContainer extends Component {
    componentDidMount() {
        const { removeNotification, message, delay = HIDE_DURATION } = this.props;

        setTimeout(() => removeNotification(message), delay);
    }

    handleClose = (event, reason) => {
        const { removeNotification, message } = this.props;

        if (reason === 'clickaway') {
            return;
        }

        removeNotification(message);
    };

    render() {
        const { message, variant } = this.props;

        return (
            <NotificationComponent
                message={message}
                variant={variant}
                onClose={this.handleClose}
            />
        );
    }
}
