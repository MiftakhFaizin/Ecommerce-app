import {configureStore} from "@reduxjs/toolkit"
import { cartSlice, productSlice } from "./Slices"

const store = configureStore({
    reducer: {
        dataProducts: productSlice.reducer,
        cart: cartSlice.reducer
    }
})

export default store
