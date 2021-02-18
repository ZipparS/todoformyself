import { actionType } from '../../actions/action-type';
import { addNotificationAction, removeNotificationAction } from './notification-action';

const initialState = [];

export const notificationReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionType.ADD_NOTIFICATION:
            return addNotificationAction(state, action.payload);
        case actionType.REMOVE_NOTIFICATION:
            return removeNotificationAction(state, action.payload);
        default:
            return state;
    }
};
