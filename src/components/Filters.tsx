import { Form, Link, useLoaderData } from 'react-router-dom'
import FormInput from './FormInput'
import FormSelect from './FormSelect'

const Filters = () => {
	const products = useLoaderData()

	const companies = products.map(product => product.company)
	const category = products.map(product => product.category)
	// const companies = products.map(product => product.company)
	// const companies = products.map(product => product.company)

	return (
		<Form className='bg-base-200 rounded-sm px-8 py-6 grid gap-x-4 gap-y-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center'>
			<FormInput
				type='search'
				label='search product'
				name='search'
				size='input-sm'
			/>
			<FormSelect
				label='category'
				size='select-sm'
				list={companies}
				name='category'
			/>
			<FormSelect
				name='company'
				label='company'
				size='select-sm'
				list={category}
			/>
			<FormSelect
				name='order'
				label='sory by'
				size='select-sm'
				list={['a-z', 'z-a', 'highest price', 'lowest price']}
			/>
			<button className='btn btn-warning btn-sm rounded-sm' type='submit'>
				Search
			</button>
			<Link className='btn rounded-sm btn-sm btn-primary' to={'/products'}>
				Reset
			</Link>
		</Form>
	)
}

export default Filters
