export const addNotificationAction = (state, payload) => {
    state.push(payload);
    return [...state];
};

export const removeNotificationAction = (state, payload) => {
    const newState = state.filter(item => item.message !== payload);
    return [...newState];
};