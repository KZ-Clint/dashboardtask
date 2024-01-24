import { createSlice } from "@reduxjs/toolkit";

const saveSlice = createSlice({
    name:"save",
    initialState:{
        save: []
    },
    reducers:{
        SAVE_PROD(state, action){
            state.save = [...state.save, action.payload]
        },
        SAVE_INITIAL_PROD(state, action){
            state.save = action.payload
        },
        REMOVE_SAVED(state, action){
            state.save = action.payload
        }
    }

})

export const {SAVE_PROD, REMOVE_SAVED, SAVE_INITIAL_PROD} = saveSlice.actions

export default saveSlice.reducer