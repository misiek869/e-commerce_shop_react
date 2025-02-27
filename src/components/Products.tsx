import React from 'react'
import Filters from './Filters'
import ProductsContainer from './ProductsContainer'
import PaginationContainer from './PaginationContainer'

const Products = () => {
	return (
		<>
			<Filters />
			<ProductsContainer />
			<PaginationContainer />
		</>
	)
}

export default Products
