import React, { Component } from 'react';

import Snackbar from '@material-ui/core/Snackbar';
import green from '@material-ui/core/colors/green';
import amber from '@material-ui/core/colors/amber';
import { withStyles } from '@material-ui/core/styles';

import { NotificationContent } from './notification-content';

const styles = theme => ({
    success: {
        backgroundColor: green[600],
    },
    error: {
        backgroundColor: theme.palette.error.dark,
    },
    info: {
        backgroundColor: theme.palette.primary.dark,
    },
    warning: {
        backgroundColor: amber[700],
    },
    icon: {
        fontSize: 18,
    },
    iconVariant: {
        opacity: 0.9,
        marginRight: theme.spacing.unit,
    },
    message: {
        display: 'flex',
        alignItems: 'center',
        fontSize: 12
    },
    snackbar: {
        position: 'static',
        transform: 'translateX(0)'
    }
});

export class NotificationComponentView extends Component {
    render() {
        const { message, variant, onClose, classes } = this.props;

        return (
            <Snackbar onClose={onClose} open={true} className={classes.snackbar}>
                <NotificationContent
                    onClose={onClose}
                    variant={variant}
                    message={message}
                    classes={classes}
                />
            </Snackbar>
        );
    }
}

export const NotificationComponent = withStyles(styles)(NotificationComponentView);
