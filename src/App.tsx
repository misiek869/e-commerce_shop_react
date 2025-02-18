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

import { RouterProvider, createBrowserRouter } from 'react-router-dom'

const App = () => {
	const router = createBrowserRouter([
		{
			path: '/',
			element: <HomeLayoutPage />,
			errorElement: <ErrorPage />,
			children: [
				{
					index: true,
					element: <LandingPage />,
					errorElement: <ErrorPage />,
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

	return <RouterProvider router={router} />
}

export default App
