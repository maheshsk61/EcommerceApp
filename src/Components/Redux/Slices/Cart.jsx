import { createSlice } from '@reduxjs/toolkit'
const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        cart: []
    },
    reducers: {
        addProduct: (state, action) => {
            state.cart.push(action.payload)
        },
        removeProduct: (state, action) => {
            state.cart = state.cart.filter((product) => {
                const productToRemove = action.payload
                return product.m_id !== productToRemove && product.l_id !== productToRemove && product.t_id !== productToRemove && product.w_id !== productToRemove && product.b_id !== productToRemove && product.p_id !== productToRemove && product.f_id !== productToRemove && product.wm_id !== productToRemove && product.e_id !== productToRemove
            })
        }
    }
})
export const { addProduct, removeProduct } = cartSlice.actions
export default cartSlice.reducer
