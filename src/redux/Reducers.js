export const productsReducer = (initialState = [], action) => {
    switch(action.type) {
        case "ADD_DATA_PRODUCTS":
            return action.payload
        default:
            return initialState
    }
}