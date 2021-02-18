import { actionType } from '../../actions/action-type';
import {
    removeCategory,
    createNewCategory,
    setActiveCategory,
    editCategoryName,
    addAllCategory
} from './category-action';

const initialState = {};

export const categoryReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionType.REMOVE_CATEGORY:
            return removeCategory(state, action.payload);
        case actionType.CREATE_CATEGORY:
            return createNewCategory(state, action.payload);
        case actionType.ACTIVE_CATEGORY:
            return setActiveCategory(state, action.payload);
        case actionType.EDIT_CATEGORY:
            return editCategoryName(state, action.payload);
        case actionType.ADD_ALL_CATEGORY:
            return addAllCategory(state, action.payload);
        default:
            return state;
    }
};