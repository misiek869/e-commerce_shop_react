import axios from 'axios'

const url = `https://e-commerce-api-it0a.onrender.com/`

export const customFetch = axios.create({
	baseURL: url,
})
