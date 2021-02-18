import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import Button from '@material-ui/core/Button';

class NewTaskButtonComponent extends Component {
    handleClick = () => this.props.history.push('/category/new/task/');

    render() {
        const buttonText = 'Create new task';

        return (
            <Button
                variant="contained"
                color="primary"
                onClick={this.handleClick}
            >
                {buttonText}
            </Button>
        );
    }
}

export const NewTaskButton = withRouter(NewTaskButtonComponent);