import { createSlice } from "@reduxjs/toolkit";

const popupsSlice = createSlice({
    name:"popups",
    initialState:{
        popup1:false,
        cartPopup:false,
        savedPopup:false
    },
    reducers:{
        SET_POPUP(state, action){
            state.popup1 = action.payload.popup1,
            state.cartPopup = action.payload.cartPopup,
            state.savedPopup = action.payload.savedPopup
        }
        
    }

})

export const {SET_POPUP} = popupsSlice.actions

export default popupsSlice.reducer