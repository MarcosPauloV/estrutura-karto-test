import React from 'react';

import Logo from '@assets/Logo-icon.svg';
import homeIcon from '@assets/home-icon.svg';
import profileIcon from '@assets/profile-icon.svg';
import shopIcon from '@assets/shop-icon.svg';
import Image from 'next/image';
import Link from 'next/link';

const Header: React.FC = () => {
	return (
		<>
			<header className='bg-cyan-950 h-20 flex items-center justify-center'>
				<nav className='w-screen flex items-center justify-around gap-2'>
					<Link href='/'>
						<Image alt='logo' src={Logo} />
					</Link>
					<ul className='flex gap-2'>
						<li>
							<Link href='/' className='flex gap-2 p-2'>
								<Image alt='Início' src={homeIcon} />
								Início
							</Link>
						</li>
						<li>
							<Link href='/' className='flex gap-2 p-2'>
								<Image alt='Shop' src={shopIcon} />
								Preços
							</Link>
						</li>
						<li>
							<Link href='/' className='flex gap-2 p-2'>
								<Image alt='Entrar' src={profileIcon} />
								Entrar
							</Link>
						</li>
					</ul>
				</nav>
			</header>
		</>
	);
};

export default Header;