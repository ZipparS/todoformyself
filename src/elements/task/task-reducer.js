import { actionType } from '../../actions/action-type';
import { changeTaskStatus, removeTask, createNewTask, addAllTask } from './task-action';

const initialState = {};

export const taskReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionType.CHANGE_STATUS_TASK:
            return changeTaskStatus(state, action.payload);
        case actionType.REMOVE_TASK:
            return removeTask(state, action.payload);
        case actionType.CREATE_TASK:
            return createNewTask(state, action.payload);
        case actionType.ADD_ALL_TASKS:
            return addAllTask(state, action.payload);
        default:
            return state;
    }
};