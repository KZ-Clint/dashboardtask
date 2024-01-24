import { configureStore } from "@reduxjs/toolkit";
import profileReducer from "./reducers/profile";
import popupsReducer from "./reducers/popups";
import cartReducer from "./reducers/cart";
import saveReducer from "./reducers/save";

export default configureStore({
    reducer:{
        profile: profileReducer,
        popups: popupsReducer,
        cart:cartReducer,
        save:saveReducer
    }
})