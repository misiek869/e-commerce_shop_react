import React from 'react'
import { ProductsGrid, SectionTitle } from '../components'

const FeaturedProducts = () => {
	return (
		<div className='pt-20'>
			<SectionTitle text={'featured products'} />
			<ProductsGrid />
		</div>
	)
}

export default FeaturedProducts
