// rootReducer.ts
import { combineReducers } from "redux";

const loadData = (state = [], action: any) => {
    switch (action.type) {
        case "SET_ACTIVITY_DATA":
            return action.payload;
        case "SET_NOTIFICATION_DATA":
            return action.payload;
        case "SET_REGISTRATION_DATA":
            return action.payload;
        default:
            return state;
    }
};

export default combineReducers({
    loadData
});

