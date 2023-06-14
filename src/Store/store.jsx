import {configureStore} from "@reduxjs/toolkit"
import CartReducer from  "../EduSlice/EduSlice"

export const store = configureStore({
    reducer: {
        edu: CartReducer,
    }
})