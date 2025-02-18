import { CiShoppingCart, CiSun, CiCloudMoon } from 'react-icons/ci'
import { HiMiniBars3BottomRight } from 'react-icons/hi2'
import { NavLink } from 'react-router-dom'
import NavLinks from './NavLinks'
import { useEffect, useState } from 'react'

const themes = {
	light: 'bumblebee',
	dark: 'dim',
}

const getTheme = (): string => {
	return localStorage.getItem('theme') || themes.light
}

const Navbar = () => {
	const [theme, setTheme] = useState<string>(getTheme())

	const handleTheme = (): void => {
		const { light, dark } = themes
		const newTheme = theme === light ? dark : light
		setTheme(newTheme)
	}

	useEffect(() => {
		document.documentElement.setAttribute('data-theme', theme)
		localStorage.setItem('theme', theme)
	}, [theme])

	return (
		<nav className='bg-zinc-700 text-slate-100'>
			<div className='navbar align-element'>
				<div className='navbar-start'>
					<NavLink
						to={'/'}
						className=' rounded-sm hidden lg:flex btn btn-outline border-4 btn-warning  items-center'>
						<span className='text-slate-100 text-2xl'>E</span>
					</NavLink>
					<div className='dropdown'>
						<label tabIndex={0} className='bnt btn-ghost lg:hidden'>
							<HiMiniBars3BottomRight className='w-6 h-6' />
						</label>
						<ul
							tabIndex={0}
							className='menu menu-sm dropdown-content mt-3 z-1 p-2 shadow-md bg-zinc-700 w-56'>
							<NavLinks />
						</ul>
					</div>
				</div>
				<div className='navbar-center hidden lg:flex'>
					<ul className='menu menu-horizontal'>
						<NavLinks />
					</ul>
				</div>
				<div className='navbar-end'>
					<label className='swap swap-flip'>
						<input
							type='checkbox'
							onChange={handleTheme}
							// className='theme-controller'
						/>
						<CiSun className='swap-on w-8 h-8' />
						<CiCloudMoon className='swap-off w-8 h-8' />
					</label>
					<NavLink
						to={'/cart'}
						className=' btn btn-ghost btn-circle btn-md ml-4'>
						<div className='indicator'>
							<CiShoppingCart className='w-6 h-6' />
							<span className='badge badge-sm badge-warning indicator-item'>
								2
							</span>
						</div>
					</NavLink>
				</div>
			</div>
		</nav>
	)
}

export default Navbar
