import React from 'react'

type FormInputProps = {
	defaultValue?: string
	type: string
	icon: React.ReactNode
	name: string
	placeholder?: string
}

const FormInput = ({
	icon,
	defaultValue,
	type,
	name,
	placeholder,
}: FormInputProps) => {
	return (
		<div className='form-control'>
			<label className='input input-bordered flex items-center gap-2 rounded-sm'>
				{icon}

				<input
					type={type}
					className='grow'
					name={name}
					defaultValue={defaultValue}
					placeholder={placeholder}
				/>
			</label>
		</div>
	)
}

export default FormInput
