import { useLoaderData } from 'react-router-dom'
import { customFetch } from '../utils'
import { formatPrice } from '../utils/formatPrice'
import { Link } from 'react-router-dom'
import { useState } from 'react'

const url: string = '/products'

export const loader = async ({ params }: { params: { id: string } }) => {
	const response = await customFetch(`${url}/${params.id}`)
	const product = response.data.product
	return product
}

const SingleProductPage = () => {
	const product = useLoaderData()

	const { image, name, description, colors, company, price } = product
	// const colors: string[] = ['red', 'green', 'blue'];

	const dollarsPrice = formatPrice(price)

	const [productColor, setProductColor] = useState<string>(colors[0])
	const [amount, setAmount] = useState<number>(1)

	return (
		<section className=''>
			<div className='text-md breadcrumbs'>
				<ul>
					<li>
						<Link to='/'>Home</Link>
					</li>
					<li>
						<Link to='/'>Products</Link>
					</li>
				</ul>
			</div>
			<div className='mt-6 grid gap-y-8 lg:grid-cols-2 lg:gap-x-16 border-b pb-4'>
				<img
					src={image}
					alt={name}
					className='w-96 h-96 object-cover rounded-sm lg:w-full'
				/>
				<div>
					<h1 className='capitalize text-3xl'>{name}</h1>
					<h4 className='text-xl text-neutral-content font-semibold mt-4'>
						{company}
					</h4>
					<p className='mt-3 text-xl'>{dollarsPrice}</p>
					<p className='mt-6 leading-loose'>{description}</p>

					<div className='mt-12'>
						<h4 className='text-md font-medium tracking-wider'>Colors</h4>
						<div className='mt-2'>
							{colors.map(color => {
								return (
									<button
										key={color}
										type='button'
										className={`badge w-6 h-6 mr-2 ${
											color === productColor && 'border-2 border-warning'
										}`}
										style={{ backgroundColor: color }}
										onClick={() => setProductColor(color)}></button>
								)
							})}
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default SingleProductPage
