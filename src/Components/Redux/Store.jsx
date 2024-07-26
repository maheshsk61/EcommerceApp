import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './Slices/Counter'
import cartReducer from './Slices/Cart'
import totalPriceReducer from './Slices/TotalPrice'
const globalStore = configureStore({
    reducer: {
        counterStore: counterReducer,
        cartStore: cartReducer,
        totalPriceStore: totalPriceReducer,
    }
})
export default globalStore