import React from 'react';
import styles from './Block9.module.scss';
import { classNames } from '../../../utils/classNames';
import Image from 'next/image';
import image1 from '../../../public/images/12.svg';
import image2 from '../../../public/images/13.png';

const addresses = [
	{
		city: 'москва',
		address: 'Каширское шоссе дом 6',
		text: <>Пн-Пт, з 08:00 до 18:00, <br />Сб, з 10:00 до 13:00, Вс, выходной</>,
		phone: '+7 (912) 782-87-00'
	},
	{
		city: 'Екатеринбург',
		address: 'Щорса дом 6',
		text: <>Пн-Пт, з 08:00 до 18:00, <br />Сб, з 10:00 до 13:00, Вс, выходной</>,
		phone: '+7 (912) 782-87-00'
	},
	{
		city: 'Тюмень',
		address: 'Ярослава Гашека дом 6',
		text: <>Пн-Пт, з 08:00 до 18:00, <br />Сб, з 10:00 до 13:00, Вс, выходной</>,
		phone: '+7 (912) 782-87-00'
	}
];

const Block9: React.FC = React.memo(() => {
	return (
		<div className={ styles.wrapper }>
			<div className={ classNames(styles.block, {}, ['container']) }>
				<div className={ styles.left }>
					<h2>Доставим авто в Екатеренбург, <br />Тюмень или Москву</h2>
					<p>Наши шоу румы и офисы расположены в трех городах <br />России, но пригнать авто мы можем в любую
						точку РФ</p>
					<Image src={ image1 } alt="" />
				</div>
				<div className={ styles.right }>
					<Image src={ image2 } alt="" />
					{
						addresses.map(({ city, address, text, phone }, index) => (
							<div key={ index } className={ styles.address }>
								<h4>{ city }</h4>
								<h5>{ address }</h5>
								<p>{ text }</p>
								<div className={ styles.phone }>{ phone }</div>
							</div>
						))
					}
				</div>
			</div>
		</div>
	);
});

Block9.displayName = 'Block9';
export default Block9;