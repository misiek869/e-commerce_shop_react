export const formatPrice = (amount: number): number => {
	const dollarsPrice = new Intl.NumberFormat('en-US', {
		style: 'currency',
		currency: 'USD',
	}).format((amount / 100).toFixed(2))

	return dollarsPrice
}
