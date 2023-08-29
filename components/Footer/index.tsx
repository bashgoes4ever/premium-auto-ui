import React from 'react';
import FooterMap from './Map/index';
import Menu from './Menu/index';

const Footer = React.memo(() => {
	return (
		<>
			<FooterMap />
			<Menu />
		</>
	);
});

Footer.displayName = 'Footer';
export default Footer;