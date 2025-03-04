import { Outlet, useNavigation } from 'react-router-dom'
import { Header, Navbar, Loading } from '../components'

const HomeLayoutPage = () => {
	const nav = useNavigation()
	const isLoading = nav.state === 'loading'

	return (
		<>
			<Header />
			<Navbar />
			{isLoading ? (
				<Loading />
			) : (
				<section className='align-element py-20'>
					<Outlet />
				</section>
			)}
		</>
	)
}

export default HomeLayoutPage
