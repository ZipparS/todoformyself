import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from 'react-redux';

import Button from '@material-ui/core/Button';

import { fakeLogin } from '../../../services';
import { actionType } from "../../../actions/action-type";

class LoginButtonComponent extends Component {
    handleClick = () => {
        const { history, services, login } = this.props;
        const method = fakeLogin.isLogin ? 'logout' : 'login';
        const url = services.isLogin ? '/login' : '/category';

        fakeLogin[method]((isLogin) => {
            login(isLogin);
            history.push(url);
        });
    };

    render() {
        const { services } = this.props;
        const buttonText = services.isLogin ? 'Sign out' : 'Login';

        return <Button
            variant="contained"
            color="primary"
            onClick={this.handleClick}
        >
            {buttonText}
        </Button>;
    }
}

export const LoginButton = connect(
    store => ({
        services: store.services
    }),
    dispatch => ({
        login: isLogin => dispatch({type: actionType.LOGIN, payload: isLogin})
    })
)(withRouter(LoginButtonComponent));