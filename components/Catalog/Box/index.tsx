import React, { useCallback, useState } from 'react';
import styles from './Box.module.scss';
import Image from 'next/image';
import icon from '../../../public/icons/chevron_down.svg';
import { classNames } from '../../../utils/classNames';

type Props = {
	title: string;
	isOpened?: boolean;
	className?: string;
}

const Box: React.FC<Props> = React.memo(({ children, title, className, isOpened: pIsOpened = false }) => {
	const [isOpened, setIsOpened] = useState(pIsOpened);

	const onClick = useCallback(() => {
		setIsOpened(isOpened => !isOpened);
	}, []);

	return (
		<div className={ classNames(styles.box, {}, [className]) }>
			<div className={ styles.title } onClick={ onClick }>
				{ title }
				<Image src={ icon } alt="" className={ isOpened && styles.iconActive } />
			</div>
			{
				isOpened && (
					<div className={ styles.content }>{ children }</div>
				)
			}
		</div>
	);
});

Box.displayName = 'CatalogSideBox';
export default Box;