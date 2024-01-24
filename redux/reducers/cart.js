import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name:"cart",
    initialState:{
        cart: []
    },
    reducers:{
        ADD_CART(state, action){
            state.cart = [...state.cart, action.payload]
        },
        ADD_INITIAL_CART(state, action){
            state.cart = action.payload
        },
        INCREASE_DECREASE_QUANTITY(state, action){
            state.cart = action.payload
        },
        REMOVE_CART(state, action){
            state.cart = action.payload
        }
    }

})

export const {ADD_CART, REMOVE_CART, ADD_INITIAL_CART, INCREASE_DECREASE_QUANTITY} = cartSlice.actions

export default cartSlice.reducer