import { Outlet } from 'react-router-dom'

const HomeLayoutPage = () => {
	return (
		<>
			<div>HomeLayoutPage</div>
			<section className='align-element py-20'>
				<Outlet />
			</section>
		</>
	)
}

export default HomeLayoutPage
