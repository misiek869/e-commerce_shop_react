import axios from 'axios'

const url = `https://e-commerce-api-it0a.onrender.com/api/v1`

export const customFetch = axios.create({
	baseURL: url,
})
