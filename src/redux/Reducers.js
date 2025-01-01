export const productsReducer = (initialState = [], action) => {
    switch(action.type) {
        case "ADD_DATA_PRODUCTS":
            return action.payload
        default:
            return initialState
    }
}

export const cartReducer = (initialState = [], action) => {
    switch(action.type) {
        case "ADD_TO_CART":
            return [...initialState, action.payload]
        case "UPDATE_CART":
            return [...action.payload]
        default:
            return initialState
    }
}