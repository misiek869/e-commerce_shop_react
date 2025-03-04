import { formatPrice } from '../utils/formatPrice'
import { useState } from 'react'

type FormRangeProps = {
	label: string
	name: string
	size: string
}

const FormRange = ({ label, name, size }: FormRangeProps) => {
	const step = 1000
	const maxPrice = 100000
	const [selectedPrice, setSelectedPrice] = useState<string>(maxPrice)

	return (
		<div className='form-control'>
			<label htmlFor={name} className='label rounded-sm'>
				<span className='label-text capitalize'>{label}</span>
				<span>{formatPrice(selectedPrice)}</span>
			</label>
			<input
				type='range'
				name={name}
				id={name}
				step={step}
				min={0}
				max={maxPrice}
				value={selectedPrice}
				onChange={e => setSelectedPrice(e.target.value)}
				className={`range range-warning ${size} rounded-sm`}
			/>
			<div className='w-full flex justify-between text-xs px-2 mt-2 '>
				<span className='font-bold text-md'>0</span>
				<span className='font-bold text-md'>Max : {formatPrice(maxPrice)}</span>
			</div>
		</div>
	)
}

export default FormRange
