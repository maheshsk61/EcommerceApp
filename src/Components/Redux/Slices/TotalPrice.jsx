import { createSlice } from '@reduxjs/toolkit'
const totalPriceSlice = createSlice({
    name: 'total',
    initialState: {
        initialTotal: 0
    },
    reducers: {
        addPrice: (state, action) => {
            state.initialTotal += action.payload
        },
        subPrice: (state, action) => {
            state.initialTotal -= action.payload
        }
    }
})
export const { addPrice, subPrice } = totalPriceSlice.actions
export default totalPriceSlice.reducer
