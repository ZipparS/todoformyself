import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { LoginFormComponent } from './login-form';
import { authRequest } from '../../services';
import {actionType} from "../../actions/action-type";
import { notificationType } from '../../elements/notification';

class LoginFormContainer extends Component {
    state = {
        login: '',
        password: ''
    };

    handleLoginChang = (event) => this.setState({ login: event.target.value.toLowerCase()});

    handlePasswordChange = (event) => this.setState({ password: event.target.value});

    authTrue = () => {
        const { history, loader } = this.props;

        this.setState({ login: '', password: '' });
        loader(false);
        history.push('/category');
    };

    authFalse = (errors) => {
        const { loader, addNotification } = this.props;
        const notificationOptions = {
            message: errors,
            variant: notificationType.ERROR
        };

        loader(false);
        addNotification(notificationOptions);
    };

    handleLogin = () => {
        const { logged, addUser, loader } = this.props;
        const { login, password } = this.state;
        const authData = {
            userData: {login, password},
            userAction: addUser,
            loginAction: logged
        };

        loader(true);
        authRequest(authData)
            .then((res) => res.auth ? this.authTrue() : this.authFalse(res.errors))
            .catch((res) => this.authFalse(res.errors));
    };

    render() {
        const { login, password } = this.state;
        const isButtonDisabled = !Boolean(login && password);
        const buttonText = 'login';

        return (
            <LoginFormComponent
                loginValue={login}
                passwordValue={password}
                onLoginChange={this.handleLoginChang}
                onPasswordChange={this.handlePasswordChange}
                onLogin={this.handleLogin}
                buttonText={buttonText}
                buttonDisabled={isButtonDisabled}
            />
        )
    }
}

export const LoginForm = connect(null,
    dispatch => ({
        logged: isLogin => dispatch({type: actionType.LOGIN, payload: isLogin}),
        addUser: user => dispatch({type: actionType.ADD_USER, payload: user}),
        loader: state => dispatch({type: actionType.ACTION_LOADER, payload: state}),
        addNotification: params => dispatch({type: actionType.ADD_NOTIFICATION, payload: params})
    })
)(withRouter(LoginFormContainer));
