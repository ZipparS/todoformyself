import React, { Component } from 'react';

import Button from "@material-ui/core/Button";

import { Input } from '../../elements/inputs';
import './login-form.css';

export class LoginFormComponent extends Component {
    render() {
        const {
            loginValue, passwordValue, onLoginChange, onPasswordChange,
            onLogin, buttonDisabled, buttonText
        } = this.props;

        return (
            <div className="Login-form">
                <div className="Login-form__wrapper">
                    <Input
                        id="login-name"
                        label="Your login"
                        value={loginValue}
                        onChange={onLoginChange}
                    />
                </div>
                <div className="Login-form__wrapper">
                    <Input
                        id="password"
                        label="Your password"
                        value={passwordValue}
                        onChange={onPasswordChange}
                    />
                </div>
                <div className="Login-form__wrapper Login-form__wrapper--button">
                    <Button
                        variant="contained"
                        color="primary"
                        fullWidth
                        onClick={onLogin}
                        disabled={buttonDisabled}
                    >
                        {buttonText}
                    </Button>
                </div>
            </div>
        );
    }
}
