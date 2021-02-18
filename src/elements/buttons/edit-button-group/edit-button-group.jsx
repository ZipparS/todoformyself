import React, { Component, Fragment } from 'react';

import { ButtonIcon as IconButton } from '../../buttons';

export class EditButtonGroup extends Component {
    render () {
        const { onConfirm, onAbortEdit } = this.props;

        return(
            <Fragment>
                <IconButton
                    onClick={onConfirm}
                    titel={'done'}
                />
                <IconButton
                    onClick={onAbortEdit}
                    titel={'clear'}
                />
            </Fragment>
        );
    }
}