'use client';

import React from 'react';
import styles from './Catalog.module.scss';
import Dropdown, { Option } from '../Dropdown/index';
import Filters from './Filters/index';
import Input from '../Fields/Input/index';
import Button from '../Button/index';
import Image from 'next/image';
import icon from '../../public/icons/Search.svg';
import ProductCard from './ProductCard/index';
import { CarItem } from '../../api/index';
import Banner from './Banner/index';

const sortOptions: Option<number>[] = [
	{
		disp: 'по стоимости',
		value: 1
	},
	{
		disp: 'по году выпуска',
		value: 2
	},
	{
		disp: 'по объему двигателя',
		value: 3
	}
];

type Props = {
	products: CarItem[];
}

const Catalog: React.FC<Props> = React.memo(({ products }) => {
	const onSortSelect = (val: Option) => {
		console.log(val);
	};

	return (
		<div className="container">
			<div className={ styles.topRow }>
				<h2>каталог автомобилей И МОТОТЕХНИКИ</h2>
				<Dropdown<number>
					options={ sortOptions }
					label="Сортировка"
					selectedValue={ 1 }
					onSelect={ onSortSelect }
				/>
			</div>
			<div className={ styles.catalogWrapper }>
				<Filters />
				<div className={ styles.products }>
					<div className={ styles.search }>
						<Input
							name="search"
							placeholder="Введите название автомобиля"
							onInput={ (val: string) => {
								console.log(val);
							} }
						/>
						<Button shape="square">
							<Image src={ icon } alt="" />
						</Button>
					</div>

					{
						products.map((car: CarItem) => (
							<ProductCard
								key={ car.id }
								data={ car }
							/>
						))
					}
					{
						products.map((car: CarItem) => (
							<ProductCard
								key={ car.id }
								data={ car }
							/>
						))
					}

					<Banner>
						<h3>Пройдите тест и получите бесплатный подбор <br />до трех - автомобилей по вашим параметрам
						</h3>
						<p>Ответьте на 6 вопросов и мы бесплатно подберём до 3-х вариантов <br />автомобилей по вашим
							предпочтениям.</p>
						<Button>Получить подбор</Button>
					</Banner>

					{
						products.map((car: CarItem) => (
							<ProductCard
								key={ car.id }
								data={ car }
							/>
						))
					}

					<Button size="big">Показать больше моделей</Button>
				</div>
			</div>
		</div>
	);
});

Catalog.displayName = 'Catalog';
export default Catalog;