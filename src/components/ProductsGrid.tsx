import { Link, useLoaderData } from 'react-router-dom'
import { formatPrice } from '../utils/formatPrice'

const ProductsGrid = () => {
	const products = useLoaderData()

	return (
		<div className='pt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3'>
			{products.map(product => {
				const { name, price, image, id } = product
				

				const formattedPrice = formatPrice(price)

				return (
					<Link
						key={id}
						to={`/products/${id}`}
						className='card shadow-md w-full hover:shadow-xl transition duration-300'>
						<figure className='px-4 pt-4'>
							<img
								src={image}
								className='rounded-sm h-64 md:h-48 w-full object-cover'
								alt={name}
							/>
						</figure>
						<div className='card-body items-center text-center'>
							<h2 className='card-title capitalize tracking-wider'>{name}</h2>
							<span className='text-secondary'>{formattedPrice}$</span>
						</div>
					</Link>
				)
			})}
		</div>
	)
}

export default ProductsGrid
