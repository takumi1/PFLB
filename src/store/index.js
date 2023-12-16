import { configureStore } from '@reduxjs/toolkit';
import catalogReducer from './catalogSlice'
import cartReducer from './buyerCartSlice'

export default configureStore({
    reducer: {
        products: catalogReducer,
        cart: cartReducer,
    },
});