import {configureStore} from "@reduxjs/toolkit"
import { authSlice, cartSlice, productSlice } from "./Slices"

const store = configureStore({
    reducer: {
        auth: authSlice.reducer,
        dataProducts: productSlice.reducer,
        cart: cartSlice.reducer
    }
})

export default store
