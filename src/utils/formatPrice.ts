export const formatPrice = (amount: number): string => {
	const dollarsPrice = new Intl.NumberFormat('en-US', {
		style: 'currency',
		currency: 'USD',
	}).format(amount / 100)

	return dollarsPrice
}
