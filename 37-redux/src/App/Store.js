import { configureStore } from "@reduxjs/toolkit";
import userDetailReducer from "../Features/UserDataSlice";



export const Store = configureStore({

    
    reducer:{
        app: userDetailReducer,
        
    }

})

