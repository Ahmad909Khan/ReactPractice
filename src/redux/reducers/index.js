import { combineReducers } from "redux";
import { groceryReducer } from "./groceryReducer"
import { selectedItemReducer } from "./selectedItemReducer"
import { editModeReducer } from "./editModeReducer";

const reducers = combineReducers({
    allGroceries: groceryReducer,
    selectedItem: selectedItemReducer,
    editMode: editModeReducer
});

export default reducers;