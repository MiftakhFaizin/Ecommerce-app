import {createSlice} from "@reduxjs/toolkit" 

export const authSlice = createSlice({
    name: "auth",
    initialState: {
        userId: "",
        login: false,
    },
    reducers: {
        login: (state, action) => {
            state.userId = action.payload
            state.login = true
        },
        logout: (state) => {
            state.userId = ""
            state.login = false
        }
    }
})

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
           const { userId, idProduct, titleProduct, price, amount, productImage } = action.payload
           const isUserIdExist = state.find(product => product.userId === userId)
           if(isUserIdExist) {
            isUserIdExist.products.push({
                userId: userId,
                idProduct: idProduct,
                titleProduct: titleProduct,
                price: price,
                amount: amount,
                productImage: productImage
            })
           } else {
            state.push({
                userId: userId,
                products: [{
                    userId: userId,
                    idProduct: idProduct,
                    titleProduct: titleProduct,
                    price: price,
                    amount: amount,
                    productImage: productImage
                }]
               })
           }
        },
        plusAmountProduct: (state, action) => {
            const { userId, index } = action.payload
            let cartForUserId = state.find(product => product.userId === userId)
            cartForUserId.products[index].amount++
        },
        minusAmountProduct: (state, action) => {
            const { userId, index } = action.payload
            let cartForUserId = state.find(product => product.userId === userId)
            if(cartForUserId.products[index].amount > 1) {
               cartForUserId.products[index].amount--
           }
        },
        DeleteProduct: (state, action) => {
            const { userId, index } = action.payload
            let cartForUserId = state.find(product => product.userId === userId)
            cartForUserId.products.splice(index, 1)
        }
    }
})

export const {login, logout} = authSlice.actions
export const {addDataProducts} = productSlice.actions
export const {addToCart, plusAmountProduct, minusAmountProduct, DeleteProduct} = cartSlice.actions

