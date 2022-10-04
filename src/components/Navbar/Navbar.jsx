import './Navbar.css'

import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';

import { navLinks } from '../../constants';
import { useState } from 'react';

const Navbar = () => {
	const [toggleMenu, setToggleMenu] = useState(false)
	return (
		<div className="navContainer">
			<a href="#">
				<h1 className="logo">Tourest</h1>
			</a>

			<ul className="navbar-list">
				{navLinks.map((nav, index) => (
					<li key={nav.id}>
						<a href={`#${nav.id}`} className="navbar-link">
							{nav.title}
						</a>
					</li>
				))}
			</ul>
			<button className="custom__button" type="button">
				Booking Now
			</button>

			<div className="navbar-menu">
				{toggleMenu ? (
					<RiCloseLine
						color="#fff"
						size={27}
						onClick={() => setToggleMenu(false)}
					/>
				) : (
					<RiMenu3Line
						color="#fff"
						size={27}
						onClick={() => setToggleMenu(true)}
					/>
				)}

				{toggleMenu && (
					<div className="navbar-menu_container scale-up-center">
						<ul className="navbar-menu_container-links">
							{navLinks.map(nav => (
								<li key={nav.id}>
									<a
										href={`#${nav.id}`}
										className="navbar-link"
										onClick={() => setToggleMenu(false)}>
										{nav.title}
									</a>
								</li>
							))}
						</ul>
						<button className="custom__button" type="button">
							Booking Now
						</button>
					</div>
				)}
			</div>
		</div>
	);
};

export default Navbar;
