import { useRouteError } from 'react-router-dom'

const ErrorElement = () => {
	const error = useRouteError()

	return <h4 className='font-bold text4-xl'>Something went wrong...</h4>
}

export default ErrorElement
