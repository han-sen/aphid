// action create
export const selectBug = (bug) => {
    // return an action
    return {
        type: "BUG_SELECTED",
        payload: bug,
    };
};

export const addBug = (bug) => {
    return {
        type: "ADD_BUG",
        payload: bug,
    };
};

export const editBug = (bug) => {
    return {
        type: "EDIT_BUG",
        payload: bug,
    };
};

export const deleteBug = (bug) => {
    return {
        type: "DELETE_BUG",
        payload: bug,
    };
};

export const selectFilter = (filter) => {
    return {
        type: "FILTER_SELECTED",
        payload: filter,
    };
};

export const signIn = (userObj) => {
    return {
        type: "SIGN_IN",
        payload: userObj,
    };
};

export const signOut = (userObj) => {
    return {
        type: "SIGN_OUT",
        payload: userObj,
    };
};
