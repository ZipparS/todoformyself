import React, { Component } from 'react';

import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { withStyles } from '@material-ui/core/styles';

const styles = (theme) => ({
    formControl: {
        margin: theme.spacing.unit,
        marginBottom: 45,
        width: '100%'
    }
});

class SelectComponent extends Component {
    static defaultProps = {
        value: ''
    };

    render() {
        const { classes, id, name, value, onChange, items } = this.props;

        return (
            <FormControl className={classes.formControl}>
                <InputLabel htmlFor={id}>{name}</InputLabel>
                <Select
                    value={value}
                    onChange={onChange}
                    inputProps={{
                        name: name,
                        id: id,
                    }}
                >
                    {Object.values(items).map((category, index) =>
                        <MenuItem value={category.id} key={index}>{category.name}</MenuItem>
                    )}
                </Select>
            </FormControl>
        );
    }
}

export const SelectInput = withStyles(styles)(SelectComponent);