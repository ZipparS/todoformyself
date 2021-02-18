import { combineReducers } from 'redux';
import { routerReducer } from "react-router-redux";

import { categoryReducer } from '../elements/category-list/category-reducer';
import { taskReducer } from '../elements/task';
import { servicesReducer } from '../services/services-reducers';
import { notificationReducer } from '../elements/notification/notification-reducer';
import { modalReducer } from '../elements/modal';
import { actionType } from '../actions/action-type';

const initialState = {};

const addUserAction = (state, payload) => {
    return {...payload};
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
      case actionType.ADD_USER:
          return addUserAction(state, action.payload);
    default:
      return state;
  }
};

export default combineReducers({
    router: routerReducer,
    allCategory: categoryReducer,
    allTasks: taskReducer,
    user: usersReducer,
    services: servicesReducer,
    notification: notificationReducer,
    modals: modalReducer
});
