import React from 'react';
import styles from './Banner.module.scss';
import image from '../../../public/images/4.png';
import Image from 'next/image';
import { classNames } from '../../../utils/classNames';

type Props = {
	className?: string;
}

const Banner: React.FC<Props> = React.memo(({ children, className }) => {
	return (
		<div className={ classNames(styles.banner, {}, [className]) }>
			{ children }

			<Image src={ image } alt="banner" />
		</div>
	);
});

Banner.displayName = 'Banner';
export default Banner;