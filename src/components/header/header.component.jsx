import React from 'react';
import { Link } from 'react-router-dom';

import { ReactComponent as Logo } from '../../assets/crown.svg';
import './header.styles.scss';

function Header() {
	return (
		<header className='header'>
			<Link className='logo-container' to='/'>
				<Logo className='logo' />
			</Link>
			<nav className='options'>
				<Link className='option' to='/shop'>
					SHOP
				</Link>
				<Link className='option' to='/contact'>
					CONTACT
				</Link>
			</nav>
		</header>
	);
}

export default Header;
