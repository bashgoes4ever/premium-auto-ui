import React from 'react';
import { Address } from '../index';
import icon from '../../../../public/icons/flag.svg';
import Image from 'next/image';
import styles from './Card.module.scss';

type Props = {
	data: Address;
}

const Card: React.FC<Props> = React.memo(({ data }) => {
	return (
		<div className={ styles.card }>
			<div className={ styles.cityName }>{ data.city }</div>
			<div className={ styles.body }>
				<div className={ styles.icon }>
					<Image src={ icon } alt="" />
				</div>
				<div>
					<div className={ styles.title }>шоурум и офис</div>
					<div className={ styles.address }>{ data.address }</div>
					<div className={ styles.title }>{ data.phone }</div>
				</div>
			</div>
		</div>
	);
});

Card.displayName = 'MapCard';
export default Card;