import { useSelector } from 'react-redux'
import CartItem from './CartItem'
import { Product as ProductType } from '../types/Product'
import { RootState } from '../store'

const CartItemsList = () => {
	const cartItems = useSelector((state: RootState) => state.cartState.cartItems)

	return (
		<div>
			{cartItems.map((item: ProductType) => {
				return <CartItem key={item.cartID} item={item} />
			})}
		</div>
	)
}

export default CartItemsList
