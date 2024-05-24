import { useSelector, useDispatch } from 'react-redux'
function Dispatch() {
    const count = useSelector((state) => state.counterStore.value)
    const cart = useSelector((state) => state.cartStore.cart)
    const totalPrice = useSelector((state) => state.totalPriceStore.initialTotal)
    const dispatch = useDispatch()
    return { count, cart, dispatch, totalPrice }
}
export default Dispatch