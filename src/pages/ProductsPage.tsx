import { Filters, PaginationContainer, ProductsContainer } from '../components'
import { customFetch } from '../utils'

export const loader = async () => {
	const response = await customFetch('/products')
	const products = response.data.products
	return products
}

const ProductsPage = () => {
	return (
		<>
			<Filters />
			<ProductsContainer />
			<PaginationContainer />
		</>
	)
}

export default ProductsPage
