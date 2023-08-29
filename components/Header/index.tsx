import React from 'react';
import CallbackBtn from './CallbackBtn/index';
import Image from 'next/image';
import logoIcon from '../../public/icons/logo.svg';
import styles from './Header.module.scss';
import { classNames } from '../../utils/classNames';
import Link from 'next/link';
import { routes } from '../../config/routes';
import Links, { LinkData } from './Links/index';
import Socials from '../Socials/index';

const leftLinks: LinkData[] = [
	{
		name: 'каталог авто',
		link: '/'// routes.catalog
	},
	{
		name: 'услуги',
		link: routes.services
	},
	{
		name: 'о компании',
		link: routes.about
	},
	{
		name: 'отзывы',
		link: routes.reviews
	}
];
const rightLinks: LinkData[] = [
	{
		name: 'партнерам',
		link: routes.partners
	},
	{
		name: 'блог',
		link: routes.blog
	},
	{
		name: 'faq',
		link: routes.faq
	},
	{
		name: 'контакты',
		link: routes.contacts
	}
];

const Header: React.FC = React.memo(() => {
	return (
		<header className={ styles.header }>
			<div className={ classNames(styles.grid, {}, ['container']) }>
				<div>
					<Links links={ leftLinks } />
				</div>
				<Link href={ routes.index } className={ styles.logo }>
					<svg width="228" height="92" viewBox="0 0 228 92" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path
							d="M0 -5.50586C0 -9.92414 3.58172 -13.5059 8 -13.5059H220C224.418 -13.5059 228 -9.92414 228 -5.50586V84C228 88.4183 224.418 92 220 92H140.372C139.021 92 137.691 91.6576 136.508 91.0048L117.864 80.72C115.459 79.3931 112.541 79.3931 110.136 80.72L91.4922 91.0048C90.3088 91.6576 88.9794 92 87.6279 92H7.99999C3.58172 92 0 88.4183 0 84V-5.50586Z"
							fill="#E8F1F5" />
					</svg>
					<Image src={ logoIcon } alt="Главная" />
				</Link>
				<div className={ styles.left }>
					<Links links={ rightLinks } />
					<CallbackBtn />
				</div>
				<Socials className={ styles.socials } />
			</div>
		</header>
	);
});

Header.displayName = 'Header';
export default Header;