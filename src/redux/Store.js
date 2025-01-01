import { combineReducers, createStore } from "redux";
import { cartReducer, productsReducer } from "./Reducers";

const reducers = combineReducers({
    dataProducts: productsReducer,
    cart: cartReducer
})

const store = createStore(reducers)

export default store