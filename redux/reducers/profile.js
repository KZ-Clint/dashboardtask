import { createSlice } from "@reduxjs/toolkit";

const profileSlice = createSlice({
    name:"profile",
    initialState:{
        name:"None...",
        sleepy:true
    },
    reducers:{
        SET_NAME(state, action){
            state.name = action.payload.name,
            state.sleepy = action.payload.sleepy
        }
    }

})

export const {SET_NAME} = profileSlice.actions

export default profileSlice.reducer