import React from 'react'

type FormInputProps = {
	defaultValue?: string
	type: string
	// icon?: React.ReactNode
	label: string
	name: string
	placeholder?: string
	size?: string
}

const FormInput = ({
	// icon,
	defaultValue,
	type,
	name,
	placeholder,
	size,
	label,
}: FormInputProps) => {
	return (
		<div className='form-control'>
			<label className='label rounded-sm'>
				<span className='label-text capitalize'>{label}</span>
			</label>
			<input
				type={type}
				className={`${size} input input-bordered rounded-sm`}
				name={name}
				defaultValue={defaultValue}
				placeholder={placeholder}
			/>
		</div>
	)
}

export default FormInput
