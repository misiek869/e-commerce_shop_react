import {
	AboutPage,
	CartPage,
	CheckoutPage,
	ErrorPage,
	HomeLayoutPage,
	LandingPage,
	LoginPage,
	OrdersPage,
	ProductsPage,
	RegisterPage,
	SingleProductPage,
} from './pages'

import { ErrorElement } from './components'

import { RouterProvider, createBrowserRouter } from 'react-router-dom'

// --------- loaders ---------- //
import { loader as landingLoader } from './pages/LandingPage'
import { loader as singleProductLoader } from './pages/SingleProductPage'

const router = createBrowserRouter([
	{
		path: '/',
		element: <HomeLayoutPage />,
		errorElement: <ErrorPage />,
		children: [
			{
				index: true,
				element: <LandingPage />,
				errorElement: <ErrorElement />,
				loader: landingLoader,
			},
			{ path: 'about', element: <AboutPage />, errorElement: <ErrorPage /> },
			{
				path: 'cart',
				element: <CartPage />,
				errorElement: <ErrorPage />,
			},
			{
				path: 'checkout',
				element: <CheckoutPage />,
				errorElement: <ErrorPage />,
			},
			{
				path: 'orders',
				element: <OrdersPage />,
				errorElement: <ErrorPage />,
			},
			{
				path: 'products',
				element: <ProductsPage />,
				errorElement: <ErrorPage />,
			},
			{
				path: 'products/:id',
				element: <SingleProductPage />,
				errorElement: <ErrorPage />,
				loader: singleProductLoader,
			},
		],
	},
	{ path: '/login', element: <LoginPage />, errorElement: <ErrorPage /> },
	{
		path: '/register',
		element: <RegisterPage />,
		errorElement: <ErrorPage />,
	},
])

const App = () => {
	return <RouterProvider router={router} />
}

export default App
