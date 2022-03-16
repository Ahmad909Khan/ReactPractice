import { ActionTypes } from "../constants/actionTypes"

const initialState = {
    item: {
        id: null,
        itemName: "",
        cost: null,
        quantity: null
    }
};

export const selectedItemReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ActionTypes.CURRENT_ITEM:
            return {
                ...state,
                item: payload
            };

        default:
            return state;
    }
}