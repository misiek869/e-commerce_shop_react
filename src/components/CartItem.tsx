import { formatPrice } from '../utils/formatPrice'
import { generateAmountOptions } from '../utils'

import { Product as ProductType } from '../types/Product'

import { useDispatch } from 'react-redux'
import { removeItem, editItem } from '../features/cart/cartSlice'

const CartItem = ({ item }) => {
	const dispatch = useDispatch()

	const { cartID, name, price, image, amount, company, productColor } = item

	// const addProductToCard = () => {
	//     dispatch(addItem({ product: cartProduct }))
	//   }

	const removeItemFromTheCart = () => {
		dispatch(removeItem(cartID))
	}

	const handleAmount = () => {}

	return (
		<article className='mb-12 flex flex-col gap-y-4 sm:flex-row flex-wrap border-b border-base-300 pb-6 last:border-b-0 justify-start'>
			<img
				src={image}
				alt={name}
				className='h-24 w-24 rounded-sm object-cover sm:h-32 sm:w-32'
			/>
			<div className='sm:ml-16 sm:w-48'>
				<h2 className='capitalize font-bold tracking-wide'>{name}</h2>
				<h3 className='mt-2 capitalize text-md font-semibold tracking-wide text-warning'>
					{company}
				</h3>
				<p className='mt-2 text-sm capitalize flex items-center gap-x-2'>
					color:{' '}
					<span
						className='badge badge-sm'
						style={{ backgroundColor: productColor }}></span>
				</p>
			</div>
			<div className='sm:ml-16'>
				<div className='form-control max-w-xs'>
					<label htmlFor='amount' className='label p-0'>
						<span className='label-text'>Amount</span>
					</label>
					<select
						className='mt-2 select select-warning select-xs'
						name='amount'
						id='amount'>
						{generateAmountOptions(amount + 10)}
					</select>
				</div>
				<button className='mt-2 link link-error link-hover text-sm'>
					Remove
				</button>
			</div>
			<p className='text-md font-medium sm:ml-auto'>{formatPrice(price)}</p>
		</article>
	)
}

export default CartItem
