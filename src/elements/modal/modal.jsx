import React, { Component } from 'react';

import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';

function Transition(props) {
    return <Slide direction="up" {...props} />;
}

export class ModalComponent extends Component {
    render() {
        const { message, actions, params, onClose } = this.props;
        const overlayClose = params.overlayClose ? onClose : null;

        return (
            <Dialog
                open={true}
                TransitionComponent={Transition}
                keepMounted
                onClose={overlayClose}
                aria-labelledby="alert-dialog-slide-title"
                aria-describedby="alert-dialog-slide-description"
            >
                <DialogTitle id="alert-dialog-slide-title">
                    {message.title}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-slide-description">
                        {message.text}
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    {
                        actions.map((item, i) =>
                            <Button onClick={item.action} color="primary" key={i}>
                                {item.text}
                            </Button>
                        )
                    }
                </DialogActions>
            </Dialog>
        );
    }
}
