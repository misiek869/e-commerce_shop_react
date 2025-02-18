import React from 'react'
import { useNavigation } from 'react-router-dom'

const SubmitButton = ({ text }: { text: string }) => {
	const navigation = useNavigation()

	const isSubmitting = navigation.state === 'submitting'

	return (
		<button className='btn btn-primary' disabled={isSubmitting}>
			{isSubmitting ? (
				<>
					<span className='loading loading-ring loading-md'></span>
				</>
			) : (
				text
			)}
		</button>
	)
}

export default SubmitButton
