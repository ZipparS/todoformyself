import React, { Component } from 'react';

import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
import { withStyles } from '@material-ui/core/styles';

const styles = () => ({
    button: {
        padding: 8
    }
});

export class ButtonIconComponent extends Component {
    static defaultProps = {
        color: 'primary',
        fontSize: 'small',
        disabled: false
    };

    render() {
        const { color, fontSize, classes, onClick, titel, disabled} = this.props;

        return (
            <IconButton
                aria-label={titel}
                color={color}
                className={classes.button}
                onClick={onClick}
                disabled={disabled}
            >
                <Icon fontSize={fontSize} >{titel}</Icon>
            </IconButton>
        );
    }
}

export const ButtonIcon = withStyles(styles)(ButtonIconComponent);