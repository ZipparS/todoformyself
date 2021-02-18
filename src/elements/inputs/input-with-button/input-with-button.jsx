import React, { Component } from 'react';

import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import { withStyles } from '@material-ui/core/styles';
import './input-with-button.css';

const styles = (theme) => ({
    margin: {
        margin: theme.spacing.unit,
    }
});

export class InputWithButtonComponent extends Component {
    state = {
        value: ''
    };

    handleChange = (event) => {
        this.setState({value: event.target.value});
    };

    handleClick = () => {
        this.props.onClick({name: this.state.value});
        this.setState({value: ''});
    };

    render() {
        const { classes } = this.props;
        const buttonText = 'Add';
        const labelText = 'Create new category';

        return (
            <div className="Input-with-button">
                <FormControl className={classes.margin}>
                    <InputLabel htmlFor="custom-css-input" >
                        {labelText}
                    </InputLabel>
                    <Input
                        id="custom-css-input"
                        onChange={this.handleChange}
                        value={this.state.value}
                    />
                </FormControl>
                <div className="Input-with-button__wrapper">
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={this.handleClick}
                    >
                        {buttonText}
                    </Button>
                </div>
            </div>
        );
    }
}

export const InputWithButton = withStyles(styles)(InputWithButtonComponent);