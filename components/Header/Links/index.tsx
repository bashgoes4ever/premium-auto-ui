'use client';

import React from 'react';
import Link from 'next/link';
import styles from './Links.module.scss';
import { usePathname } from 'next/navigation';
import { classNames } from '../../../utils/classNames';
import { LinkData } from '../../../config/types';

type Props = {
	links: LinkData[]
}

const Links: React.FC<Props> = React.memo(({ links }) => {
	const pathname = usePathname();

	return (
		<ul className={ styles.wrapper }>
			{
				links.map(({ name, link }) => (
					<li key={ name } className={ classNames(styles.link, { [styles.active]: pathname === link }) }>
						<Link href={ link }>{ name }</Link>
					</li>
				))
			}
		</ul>
	);
});

Links.displayName = 'HeaderLinks';
export default Links;