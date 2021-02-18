export const removeCategory = (state, payload) => {
    console.log('payload', payload);
    delete state[payload];
    return {...state};
};

export const createNewCategory = (state, payload) => {
    const numCount = Object.values(state)[Object.values(state).length - 1].num + 1;
    const newId = `${payload.name.replace(' ', '')}${numCount}`;
    const newCat = {
        [newId]: {
            id: newId,
            num: numCount,
            type: "category",
            parent: payload.parent || '',
            name: payload.name,
            active: false
        }
    };

    return {
        ...state,
        ...newCat
    };
};

export const setActiveCategory = (state, payload) => {
    const getActiveCategory = Object.values(state).filter(category => category.active === true);
    let prevActiveCategory = '';

    if(getActiveCategory.length) {
        prevActiveCategory = getActiveCategory[0].id;
    }

    return {
        ...state,
        [prevActiveCategory]: {
            ...state[prevActiveCategory],
            active: false
        },
        [payload]: {
            ...state[payload],
            active: true
        }
    };
};

export const editCategoryName = (state, payload) => {
    return {
        ...state,
        [payload.id]: {
            ...state[payload.id],
            name: payload.name
        }
    };
};

export const addAllCategory = (state, payload) => {
    return {...payload};
};