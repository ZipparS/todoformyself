import React, { Component } from 'react';

import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';

const styles = () => ({
    formControl: {
        width: '100%',
        margin: 0
    }
});

class InputComponent extends Component {
    render() {
        const {classes, value, onChange, id, label, placeholder, helperText, multiline, variant, inputRef} = this.props;

        return (
            <TextField
                id={id}
                label={label}
                className={classes.formControl}
                placeholder={placeholder}
                helperText={helperText}
                fullWidth
                multiline={multiline}
                variant={variant}
                margin="normal"
                InputLabelProps={{ shrink: true }}
                inputProps={{style: {height: 20}}}
                value={value}
                onChange={onChange}
                inputRef={inputRef}
            />
        );
    }
}

export const Input = withStyles(styles)(InputComponent);
