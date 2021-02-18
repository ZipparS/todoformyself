export const changeTaskStatus = (state, payload) => ({
    ...state,
    [payload.id]: {
        ...state[payload.id],
        checked: payload.status
    }
});

export const removeTask = (state, payload) => {
    delete state[payload];
    return {...state};
};

export const createNewTask = (state, payload) => ({...state, ...payload });

export const addAllTask = (state, payload) => ({...payload});