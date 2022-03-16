import { ActionTypes } from "../constants/actionTypes"

const initialState = {
    groceries: [
        {
            id: 1,
            itemName: "Cabbage",
            cost: 30,
            quantity: 2
        },
        {
            id: 2,
            itemName: "Potato",
            cost: 10,
            quantity: 5
        }
    ]
}
export const groceryReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ActionTypes.ADD_NEW_ITEM:
            return {
                ...state,
                groceries: [...state.groceries, payload]
            };

        case ActionTypes.REMOVE_ITEM:
            return {
                ...state,
                groceries: state.groceries.filter((item, index) => index !== payload)
            };

        case ActionTypes.UPDATE_ITEM:
            return {
                ...state,
                groceries: state.groceries.map(
                    (item, index) => (index + 1) === payload.id ? payload.updatedItem : item)
            };

        default:
            return state;
    }
}