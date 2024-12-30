import { combineReducers, createStore } from "redux";
import { productsReducer } from "./Reducers";

const reducers = combineReducers({
    dataProducts: productsReducer
})

const store = createStore(reducers)

export default store