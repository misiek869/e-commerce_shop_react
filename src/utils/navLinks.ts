type Link = {
	id: number
	url: string
	text: string
}

const navLinks: Link[] = [
	{ id: 1, url: '/', text: 'home' },
	{ id: 2, url: 'about', text: 'about' },
	{ id: 3, url: 'products', text: 'products' },
	{ id: 4, url: 'cart', text: 'cart' },
	{ id: 5, url: 'checkout', text: 'checkout' },
	{ id: 6, url: 'orders', text: 'orders' },
]

export default navLinks
