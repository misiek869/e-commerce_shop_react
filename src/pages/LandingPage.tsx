import { FeaturedProducts, Hero } from '../components'
import { customFetch } from '../utils'

const url: string = '/products'

export const loader = async () => {
	const response = await customFetch(url)
	const products = response.data.products

	return products
}

const LandingPage = () => {
	return (
		<>
			<Hero />
			<FeaturedProducts />
		</>
	)
}

export default LandingPage
