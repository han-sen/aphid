import { combineReducers } from "redux";
import seedData from "../seed";

const bugsReducer = (bugs = seedData, action) => {
    if (action.type === "ADD_BUG") {
        return [action.payload, ...bugs];
    } else if (action.type === "EDIT_BUG") {
        return action.payload;
    } else if (action.type === "DELETE_BUG") {
        return action.payload;
    }
    return bugs;
};

const selectedBugReducer = (selectedBug = null, action) => {
    if (action.type === "BUG_SELECTED") {
        return action.payload;
    }
    return selectedBug;
};

const filterReducer = (options = { status: "open", project: "" }, action) => {
    if (action.type === "FILTER_SELECTED") {
        return action.payload;
    }
    return { ...options };
};

export default combineReducers({
    bugs: bugsReducer,
    filters: filterReducer,
    selectedBug: selectedBugReducer,
});
