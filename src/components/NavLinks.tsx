import { NavLink } from 'react-router-dom'
import navLinks from '../utils/navLinks'

const NavLinks = () => {
	return (
		<>
			{navLinks.map(link => {
				return (
					<li key={link.id}>
						<NavLink className='capitalize rounded-sm' to={link.url}>
							{link.text}
						</NavLink>
					</li>
				)
			})}
		</>
	)
}

export default NavLinks
