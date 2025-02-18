import React from 'react'

type FormInputProps = {
	defaultValue?: string
	type: string
	icon: React.ReactNode
	name: string
}

const FormInput = ({ icon, defaultValue, type, name }: FormInputProps) => {
	return (
		<div className='form-control'>
			<label className='input input-bordered flex items-center gap-2 rounded-sm'>
				{icon}

				<input
					type={type}
					className='grow'
					name={name}
					defaultValue={defaultValue}
				/>
			</label>
		</div>
	)
}

export default FormInput
