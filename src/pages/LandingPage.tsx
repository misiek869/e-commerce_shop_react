import { Hero } from '../components'
import { customFetch } from '../utils'

const url: string = '/products'

export const loader = async () => {
	const response = await customFetch(url)
	const products = response.data
	return { products }
}

const LandingPage = () => {
	return (
		<>
			<Hero />
		</>
	)
}

export default LandingPage
