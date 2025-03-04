import { createSlice } from '@reduxjs/toolkit'
import { toast } from 'react-toastify'

const defaultState = {
	cartItems: [],
	numItemsInCart: 0,
	cartTotal: 0,
	shipping: 500,
	tax: 0,
	orderTotal: 0,
}

const cartSLice = createSlice({
	name: 'cart',
	initialState: defaultState,
	reducers: {
		addItem: (state, action) => {
			console.log(action.payload)
		},

		removeItem: state => {},
		editItem: (state, action) => {},
		clearCart: state => {},
	},
})

export const { addItem, removeItem, editItem, clearCart } = cartSLice.actions
export default cartSLice.reducer
