import React from 'react';
import Box from '../Box/index';
import CheckboxGroup, { CheckboxType } from '../CheckboxGroup/index';
import Range from '../RangeSlider/index';
import { formatNumber } from '../../../utils/misc';
import styles from './Filters.module.scss';
import Button from '../../Button/index';
import Image from 'next/image';
import icon from '../../../public/icons/close.svg';

const group1: CheckboxType[] = [
	{
		name: 'auto',
		label: 'легковые авто',
		additionalInfo: '34'
	},
	{
		name: 'moto',
		label: 'Мотоциклы',
		additionalInfo: '12'
	},
	{
		name: 'electro',
		label: 'Электрокары',
		additionalInfo: '6'
	},
	{
		name: 'buggy',
		label: 'Багги',
		additionalInfo: '14'
	},
	{
		name: 'quadro',
		label: 'Квадроциклы',
		additionalInfo: '7'
	}
];

const group2: CheckboxType[] = [
	{
		name: 'bmw',
		label: 'bmw',
		additionalInfo: '12'
	},
	{
		name: 'mercedes',
		label: 'mercedes benz',
		additionalInfo: '57'
	},
	{
		name: 'audi',
		label: 'audi',
		additionalInfo: '14'
	},
	{
		name: 'toyota',
		label: 'toyota',
		additionalInfo: '43'
	},
	{
		name: 'kia',
		label: 'kia',
		additionalInfo: '19'
	}
];

const price = {
	min: 400000,
	max: 1200000,
	step: 1000
};

const Filters: React.FC = React.memo(() => {
	return (
		<aside className={ styles.filters }>
			<Box title="Выберите вид транспорта" isOpened>
				<CheckboxGroup
					checkboxes={ group1 }
					onSelect={ (selected) => {
						console.log(selected);
					} }
				/>
			</Box>
			<Box title="Марка автомобиля" isOpened>
				<CheckboxGroup
					checkboxes={ group2 }
					onSelect={ (selected) => {
						console.log(selected);
					} }
				/>
			</Box>
			<Box title="Стоимость" isOpened>
				<Range
					max={ price.max }
					min={ price.min }
					step={ price.step }
					onChange={ (val) => {
						console.log(val);
					} }
					formatValue={ formatNumber }
				/>
			</Box>
			<div className={ styles.clear }>
				Очистить фильтры
				<Button size="small" shape="square">
					<Image src={ icon } alt="" />
				</Button>
			</div>
		</aside>
	);
});

Filters.displayName = 'Filters';
export default Filters;