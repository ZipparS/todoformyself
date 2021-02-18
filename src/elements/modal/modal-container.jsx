import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

import { ModalComponent } from './modal';
import { actionType } from '../../actions/action-type';

class ModalContainer extends Component {
    render() {
        const { modals, closeModal } = this.props;

        return (
            <Fragment>
                {
                    modals.map((modal, i) =>
                        <ModalComponent
                            message={{...modal.content}}
                            actions={modal.actions}
                            onClose={closeModal}
                            params={modal.params}
                            key={i}
                        />
                    )
                }
            </Fragment>
        );
    }
}

export const Modal = connect(
    state => ({modals: state.modals}),
    dispatch => ({
        closeModal: () => dispatch({type: actionType.REMOVE_MODAL})
    })
)(ModalContainer);
