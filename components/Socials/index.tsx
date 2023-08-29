import React from 'react';
import styles from './Socials.module.scss';
import fbIcon from '../../public/icons/fb.svg';
import instIcon from '../../public/icons/instagram.svg';
import youtubeIcon from '../../public/icons/youtube.svg';
import Image from 'next/image';
import { classNames } from '../../utils/classNames';

type Size = 'normal' | 'big'
type Props = {
	className?: string;

	size?: Size;
}

const socials = [
	{
		icon: youtubeIcon,
		link: 'https://ussphotos.com/s/tCbnv3124900PBtrp'
	},
	{
		icon: fbIcon,
		link: 'https://ussphotos.com/s/tCbnv3124900PBtrp1'
	},
	{
		icon: instIcon,
		link: 'https://ussphotos.com/s/tCbnv3124900PBtrp2'
	}
];

const Socials: React.FC<Props> = React.memo(({ className, size = 'normal' }) => {
	return (
		<div className={ classNames(styles.wrapper, {}, [className]) }>
			{
				socials.map(({ icon, link }) => (
					<a
						href={ link }
						target="_blank"
						key={ link }
						className={ classNames(styles.icon, {}, [styles[size]]) }
					>
						<Image src={ icon } alt={ link } />
					</a>
				))
			}
		</div>
	);
});

Socials.displayName = 'SocialIcons';
export default Socials;