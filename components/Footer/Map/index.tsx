'use client';

import React, { useMemo } from 'react';
import styles from './Map.module.scss';
import { useMap } from './useMap';
import Card from './Card/index';
import { classNames } from '../../../utils/classNames';
import { Map, Placemark, YMaps } from '@pbe/react-yandex-maps';

export type Address = {
	city: string;
	address: string;
	phone: string;
}

const addresses: Address[] = [
	{
		city: 'Москва',
		address: 'Ул. Каширское шоссе дом 6',
		phone: '+7 (917) 360-67-74'
	},
	{
		city: 'Екатеринбург',
		address: 'Ул. Щорса дом 6',
		phone: '+7 (917) 360-67-74'
	},
	{
		city: 'Тюмень',
		address: 'Ул. Ярослава гашека дом 6',
		phone: '+7 (917) 360-67-74'
	}
];

const FooterMap = React.memo(() => {
	const { center, placeMarks } = useMap({ addresses });

	const defaultState = useMemo(() => ({
		center,
		zoom: 7
	}), [center]);

	return (
		<div className={ styles.wrapper }>
			<YMaps>
				<Map
					defaultState={ defaultState }
					className={ styles.map }
				>
					{ placeMarks.map((mark) => (
						<Placemark
							key={ mark.join(',') }
							geometry={ mark }
							options={ {
								iconLayout: 'default#image',
								iconImageHref: '/icons/mapIcon.svg',
								iconImageSize: [56, 56],
								iconImageOffset: [-28, -28]
							} }
						/>
					)) }
				</Map>
			</YMaps>
			<div className={ classNames(styles.cards, {}, ['container']) }>
				{
					addresses.map((address) => <Card data={ address } key={ address.address } />)
				}
			</div>
		</div>
	);
});

FooterMap.displayName = 'FooterMap';
export default FooterMap;