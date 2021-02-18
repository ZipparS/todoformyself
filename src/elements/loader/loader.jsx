import React, { Component } from 'react';

import { withStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

import './loader.css';

const styles = theme => ({
    progress: {
        margin: theme.spacing.unit * 2,
    },
});

class LoaderComponent extends Component {
    render() {
        const { classes } = this.props;

        return (
            <div className="Loader">
                <CircularProgress className={classes.progress} size={50} />
            </div>
        );
    }
}

export const LoaderComponentView =  withStyles(styles)(LoaderComponent);
