import { Link, useLoaderData } from 'react-router-dom'
import { formatPrice } from '../utils/formatPrice'

const ProductsList = () => {
	const products = useLoaderData()

	return (
		<div className='pt-12 flex flex-col gap-y-4 '>
			{products.map(product => {
				const { name, price, image, id, company } = product

				const formattedPrice = formatPrice(price)

				return (
					<Link
						key={id}
						to={`/products/${id}`}
						className='p-4 rounded-sm flex flex-col sm:flex-row gap-y-8 flex-wrap bg-gray-700 shadow-lg hover:shadow-xl duration-300 group'>
						<img
							src={image}
							className='rounded-sm h-24 w-24  sm:h-32 sm:w-32 object-cover group-hover:scale-105 transition duration-300'
							alt={name}
						/>

						<div className='ml-2 sm:ml-16'>
							<h2 className=' capitalize  font-medium text-2xl'>{name}</h2>
							<h4 className=' capitalize  text-lg  text-neutral-content'>
								{company}
							</h4>
						</div>
						<p className='text-lg font-medium ml-0 sm:ml-auto text-warning'>
							{formattedPrice}
						</p>
					</Link>
				)
			})}
		</div>
	)
}

export default ProductsList
