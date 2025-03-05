import { useSelector } from 'react-redux'
import { formatPrice } from '../utils/formatPrice'

const CartTotals = () => {
	const { cartTotal, shipping, tax, orderTotal } = useSelector(
		state => state.cartState
	)

	return (
		<div className='card bg-base-200'>
			<div className='card-body'>
				<p className='flex justify-between text-xs border-b border-b-base-300 pb-2'>
					<span>Subtotal</span>
					<span>{formatPrice(cartTotal)}</span>
				</p>
				<p className='flex justify-between text-xs border-b border-b-base-300 pb-2 border-b-'>
					<span>Shipping</span>
					<span>{formatPrice(shipping)}</span>
				</p>
				<p className='flex justify-between text-xs border-b border-b-base-300 pb-2 border-b-'>
					<span>Tax</span>
					<span>{formatPrice(tax)}</span>
				</p>
				<p className='mt-4 flex justify-between text-sm pb-2'>
					<span className='font-bold'>Total</span>
					<span className='font-bold'>{formatPrice(orderTotal)}</span>
				</p>
			</div>
		</div>
	)
}

export default CartTotals
