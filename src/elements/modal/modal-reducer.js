import { actionType } from '../../actions/action-type';
import { addModalAction, removeModalAction } from './modal-actions';

const initialState = [];

export const modalReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionType.ADD_MODAL:
            return addModalAction(state, action.payload);
        case actionType.REMOVE_MODAL:
            return removeModalAction(state);
        default:
            return state;
    }
};
