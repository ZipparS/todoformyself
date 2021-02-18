import { actionType } from '../actions/action-type';
import { fakeLogin, actionLoader } from './services-action';

const initialState = {
    isLogin: false,
    loader: false
};

export const servicesReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionType.LOGIN:
            return fakeLogin(state, action.payload);
        case actionType.ACTION_LOADER:
            return actionLoader(state, action.payload);
        default:
            return state;
    }
};
