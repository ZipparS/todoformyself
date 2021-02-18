import React, { Component } from 'react';
import classNames from 'classnames';

import SnackbarContent from '@material-ui/core/SnackbarContent';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import WarningIcon from '@material-ui/icons/Warning';
import ErrorIcon from '@material-ui/icons/Error';
import InfoIcon from '@material-ui/icons/Info';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';

const variantIcon = {
    success: CheckCircleIcon,
    warning: WarningIcon,
    error: ErrorIcon,
    info: InfoIcon,
};

export class NotificationContent extends Component {
    render() {
        const { classes, className, message, onClose, variant, ...other } = this.props;
        const Icon = variantIcon[variant];

        return (
            <SnackbarContent
                className={classNames(classes[variant], className)}
                aria-describedby="client-snackbar"
                message={
                    <span id="client-snackbar" className={classes.message}>
                    <Icon className={classNames(classes.icon, classes.iconVariant)} />
                        {message}
                </span>
                }
                action={[
                    <IconButton
                        key="close"
                        aria-label="Close"
                        color="inherit"
                        className={classes.close}
                        onClick={onClose}
                    >
                        <CloseIcon className={classes.icon} />
                    </IconButton>
                ]}
                {...other}
            />
        );
    }
}

