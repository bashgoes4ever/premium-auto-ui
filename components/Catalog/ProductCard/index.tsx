import React from 'react';
import { CarItem } from '../../../api/index';
import styles from './ProductCard.module.scss';
import Image from 'next/image';
import { formatNumber } from '../../../utils/misc';
import Button from '../../Button/index';

type Props = {
	data: CarItem;
}

const ProductCard: React.FC<Props> = React.memo(({ data }) => {
	const { image, name, countryIcon, countryName, isAvailable, specs, price, id } = data;

	return (
		<div className={ styles.card }>
			<div className={ styles.image }>
				<Image src={ image } alt={ name } />
			</div>
			<div className={ styles.topRow }>
				<h5>{ name }</h5>
				<div className={ styles.countryRow }>
					<div className={ styles.country }>
						<Image src={ countryIcon } alt={ name } />
						<span>{ countryName }</span>
					</div>
					<div className={ styles.available }>{ isAvailable ? 'В наличии' : 'Под заказ' }</div>
				</div>
			</div>
			<div className={ styles.specs }>
				{
					specs.map((spec: string) => <span key={ spec }>{ spec }</span>)
				}
			</div>
			<div className={ styles.bottomRow }>
				<div className={ styles.price }>{ formatNumber(price) } Р.</div>
				<Button size="xsmall" theme="light" className={ styles.btn }>ПОДРОБНЕЕ</Button>
			</div>
		</div>
	);
});

ProductCard.displayName = 'ProductCard';
export default ProductCard;