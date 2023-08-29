import React from 'react';
import Image from 'next/image';
import { classNames } from '../../../utils/classNames';
import styles from './Block1.module.scss';

import mainBg from '../../../public/images/main-bg.png';
import carsImg from '../../../public/images/cars.png';
import euIcon from '../../../public/icons/main-page/eu.svg';
import chinaIcon from '../../../public/icons/main-page/china.svg';
import usaIcon from '../../../public/icons/main-page/usa.svg';
import calendarIcon from '../../../public/icons/main-page/Calendar.svg';
import locationIcon from '../../../public/icons/main-page/Location.svg';
import workIcon from '../../../public/icons/main-page/Work.svg';
import boxIcon from '../../../public/icons/main-page/box.svg';

const Block1: React.FC = () => {
	return (
		<div className={ classNames(styles.wrapper, {}, ['container']) }>
			<Image src={ mainBg } alt="bg" className={ styles.bg } />
			<Image src={ carsImg } alt="cars" className={ styles.cars } />

			<h1 className={ styles.title }>Профессиональный подбор и импорт <br />автомобилей и мототехники из</h1>

			<div className={ styles.countries }>
				<div className={ styles.country }>
					<Image src={ euIcon } alt="eu" />
					<div className={ styles.countryTitle }>европы</div>
				</div>
				<div className={ styles.country }>
					<Image src={ chinaIcon } alt="china" />
					<div className={ styles.countryTitle }>китая</div>
				</div>
				<div className={ styles.country }>
					<Image src={ usaIcon } alt="usa" />
					<div className={ styles.countryTitle }>сша</div>
				</div>
			</div>

			<div className={ styles.cards }>
				<div className={ styles.card }>
					<Image src={ boxIcon } alt="icon" className={ styles.boxIcon } />
					<div className={ styles.cardFlex }>
						<Image src={ calendarIcon } alt="icon" />
						<div className={ styles.cardTitle }>Доставим авто <br />в течение 30 дней</div>
					</div>
				</div>
				<div className={ styles.card }>
					<Image src={ boxIcon } alt="icon" className={ styles.boxIcon } />
					<div className={ styles.cardFlex }>
						<Image src={ locationIcon } alt="icon" />
						<div className={ styles.cardTitle }>На 10 - 25 % дешевле <br />рынка в России</div>
					</div>
				</div>
				<div className={ styles.card }>
					<Image src={ boxIcon } alt="icon" className={ styles.boxIcon } />
					<div className={ styles.cardFlex }>
						<Image src={ workIcon } alt="icon" />
						<div className={ styles.cardTitle }>Работаем более <br />10 лет</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Block1;