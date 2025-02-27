import { useLoaderData } from 'react-router-dom'
import { IoGridSharp, IoListSharp } from 'react-icons/io5'

import { ProductsList, ProductsGrid } from '../components'
import { useState } from 'react'

const ProductsContainer = () => {
	const products = useLoaderData()

	const totalProducts: number = products.length

	const [display, setDisplay] = useState<string>('grid')

	const setActiveStyles = (pattern: string) => {
		return `text-xl btn btn-circle btn-sm ${
			pattern === display
				? 'btn-warning text-primary-content'
				: 'btn-ghost text-base-content'
		}`
	}

	return (
		<>
			<div className='flex justify-between items-center mt-10 border-b border-warning pb-6'>
				<h4 className='font-medium text-lg'>
					{totalProducts} Product{totalProducts > 1 && 's'}{' '}
				</h4>
				<div className='flex gap-x-2'>
					<button
						type='button'
						onClick={() => setDisplay('grid')}
						className={setActiveStyles('grid')}>
						<IoGridSharp />
					</button>
					<button
						type='button'
						onClick={() => setDisplay('list')}
						className={setActiveStyles('list')}>
						<IoListSharp />
					</button>
				</div>
			</div>

			<div>
				{totalProducts === 0 ? (
					<h5 className='text-2xl mt-16'>
						Sorry, no products matched your search...
					</h5>
				) : display === 'grid' ? (
					<ProductsGrid />
				) : (
					<ProductsList />
				)}
			</div>
		</>
	)
}

export default ProductsContainer
