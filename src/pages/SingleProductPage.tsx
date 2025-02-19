import { useLoaderData } from 'react-router-dom'
import { formatPrice, customFetch } from '../utils'
import { Link } from 'react-router-dom'
import { useState } from 'react'

const url: string = '/products'

export const loader = async ({ params }: { params: { id: string } }) => {
	const response = await customFetch(`${url}/${params.id}`)
	const product = response.data.product
	return product
}

const SingleProductPage = () => {
	return <div>SingleProductPage</div>
}

export default SingleProductPage
