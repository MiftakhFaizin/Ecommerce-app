import {createSlice} from "@reduxjs/toolkit" 

export const productSlice = createSlice({
    name: "product",
    initialState: [],
    reducers: {
        addDataProducts: (state, action) => {
            return action.payload
        },
    }
})

export const cartSlice = createSlice({
    name: "cart",
    initialState: [],
    reducers: {
        addToCart: (state, action) => {
            state.push(action.payload)
        },
        plusAmountProduct: (state, action) => {
            state[action.payload].amount++
        },
        minusAmountProduct: (state, action) => {
           if (state[action.payload].amount > 1) {
            state[action.payload].amount--
           }
        },
    }
})

export const {addDataProducts} = productSlice.actions
export const {addToCart, plusAmountProduct, minusAmountProduct} = cartSlice.actions

