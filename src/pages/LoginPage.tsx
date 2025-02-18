import { FormInput, SubmitButton } from '../components'
import { Form, Link } from 'react-router-dom'

const EmailIcon = () => (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		viewBox='0 0 16 16'
		fill='currentColor'
		className='h-4 w-4 opacity-70'>
		<path d='M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z' />
		<path d='M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z' />
	</svg>
)

const PasswordIcon = () => (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		viewBox='0 0 16 16'
		fill='currentColor'
		className='h-4 w-4 opacity-70'>
		<path
			fillRule='evenodd'
			d='M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z'
			clipRule='evenodd'
		/>
	</svg>
)

const LoginPage = () => {
	return (
		<section className='h-screen grid place-items-center'>
			<Form
				method='post'
				className='card w-96 p-8 bg-base-100 shadow-md flex flex-col rounded-sm border gap-y-4'>
				<h4 className='text-center text-3xl font-semibold'>Login</h4>
				<FormInput
					type='email'
					icon={<EmailIcon />}
					name='email'
					defaultValue='test@test.com'
					placeholder='Email'
				/>
				<FormInput
					type='password'
					icon={<PasswordIcon />}
					name='password'
					defaultValue='1234'
					placeholder='Password'
				/>
				<div className='flex flex-col mt-4'>
					<SubmitButton text='login' />
				</div>
				<button type='button' className='mt-2 btn'>
					guest user
				</button>
				<Link
					className='text-center mt-4 capitalize link link-hover'
					to={'/register'}>
					Register
				</Link>
			</Form>
		</section>
	)
}

export default LoginPage
