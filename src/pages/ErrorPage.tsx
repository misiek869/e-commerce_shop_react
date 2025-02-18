import { Link, useRouteError } from 'react-router-dom'
import img from '../assets/404.svg'
import error from '../assets/error.svg'

interface RouteError {
	status: number
	message?: string
	// data?: any
}

const ErrorPage = () => {
	const error: RouteError = useRouteError() as RouteError // Typowanie błędu
	if (error.status === 404) {
		return (
			<main className='grid min-h-[50vh] place-items-center px-10'>
				<img
					className='h-100 md:h-64 md:w-64'
					src={img}
					sizes='(max-width:768px) 50vw,(max-width:1200px) 50vw, 33vw '
					alt='not found'
				/>
				<h3 className='text-center font-bold text-7xl'>Ohh!</h3>
				<p className='text-center font-semibold text-3xl'>
					We can't seem to find page you are looking for
				</p>
				<div className='mt-10'>
					<Link className='btn base-300' to='/'>
						back home
					</Link>
				</div>
			</main>
		)
	}

	return (
		<main className='grid min-h-[50vh] place-items-center px-10'>
			<img
				className='h-100 md:h-64 md:w-64'
				src={error}
				sizes='(max-width:768px) 50vw,(max-width:1200px) 50vw, 33vw '
				alt='not found'
			/>
			<h3 className='text-center font-bold text-7xl'>Ohh!</h3>
			<p className='text-center font-semibold text-3xl'>
				We can't seem to find page you are looking for
			</p>
			<Link to='/'>back home</Link>
		</main>
	)
}

export default ErrorPage
