import { ActionTypes } from "../constants/actionTypes"

const initialState = {
    editing: false
};

export const editModeReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ActionTypes.EDIT_MODE:
            return {
                ...state,
                editing: payload
            };

        default:
            return state;
    }
}