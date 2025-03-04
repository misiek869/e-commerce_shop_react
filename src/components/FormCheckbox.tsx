import { useState } from 'react'

type FormCheckboxProps = {
	label: string
	name: string
	defaultValue?: boolean
	size: string
}

const FormCheckbox = ({
	label,
	name,
	defaultValue,
	size,
}: FormCheckboxProps) => {
	return (
		<div className='form-control items-center'>
			<label className='label' htmlFor={name}>
				<span className='label-text capitalize'>{label}</span>
			</label>
			<input
				type='checkbox'
				name={name}
				id={name}
				defaultChecked={defaultValue}
				className={`checkbox checkbox-warning ${size} rounded-sm `}
			/>
		</div>
	)
}

export default FormCheckbox
