import changeNumber from "./updown";
import data from "./addData";
import { combineReducers } from "redux";



const rootReducer = combineReducers({
    changeNumber,data
});


export default rootReducer;