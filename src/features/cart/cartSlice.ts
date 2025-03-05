import { createSlice } from '@reduxjs/toolkit'
import { toast } from 'react-toastify'
import { Product as ProductType } from '../../types/Product'

const defaultState = {
	cartItems: [] as ProductType[],
	numItemsInCart: 0,
	cartTotal: 0,
	shipping: 500,
	tax: 0,
	orderTotal: 0,
}

const getLocalStorage = () => {
	const cart = localStorage.getItem('cart') || JSON.stringify(defaultState)
	return JSON.parse(cart)
}

const cartSLice = createSlice({
	name: 'cart',
	initialState: getLocalStorage(),
	reducers: {
		addItem: (state, action) => {
			const { product } = action.payload
			const item = state.cartItems.find(
				(item: ProductType) => item.cartID === product.cartID
			)
			if (item) {
				item.amount += product.amount
			} else {
				state.cartItems.push(product)
			}

			state.numItemsInCart += product.amount
			state.cartTotal += product.price * product.amount
			cartSLice.caseReducers.calculateTotal(state)
		},

		removeItem: state => {},
		editItem: (state, action) => {},
		clearCart: state => {},
		calculateTotal: state => {
			state.tax = 0.23 * state.cartTotal
			state.orderTotal = state.cartTotal + state.shipping + state.tax

			localStorage.setItem('cart', JSON.stringify(state))
			toast.success('Item added to the Cart')
			console.log(state)
		},
	},
})

export const { addItem, removeItem, editItem, clearCart } = cartSLice.actions
export default cartSLice.reducer
