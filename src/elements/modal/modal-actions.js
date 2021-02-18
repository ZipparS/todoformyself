export const addModalAction = (state, payload) => {
    state.push(payload);
    return [...state];
};

export const removeModalAction = (state) => {
    state.pop();
    return [...state];
};
