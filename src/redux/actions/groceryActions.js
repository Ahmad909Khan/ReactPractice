import { ActionTypes } from "../constants/actionTypes"

export const addNewItem = (newGroceryItem) => {
    return {
        type: ActionTypes.ADD_NEW_ITEM,
        payload: newGroceryItem
    };
};

export const selectCurrentItem = (item) => {
    return {
        type: ActionTypes.CURRENT_ITEM,
        payload: item
    };
};

export const updateItem = (id, updatedItem) => {
    return {
        type: ActionTypes.UPDATE_ITEM,
        payload: {id, updatedItem}
    };
};

export const removeItem = (index) => {
    return {
        type: ActionTypes.REMOVE_ITEM,
        payload: index
    };
};

export const editMode = (mode) => {
    return {
        type: ActionTypes.EDIT_MODE,
        payload: mode
    }
}