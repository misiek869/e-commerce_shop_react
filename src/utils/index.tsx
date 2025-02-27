import axios from 'axios'

const url = `https://e-commerce-api-it0a.onrender.com/api/v1`

export const customFetch = axios.create({
	baseURL: url,
})

export const generateAmountOptions = (number: number) => {
	return Array.from({ length: number }, (_, index) => {
		const amount = index + 1

		return (
			<option key={amount} value={amount}>
				{amount}
			</option>
		)
	})
}
