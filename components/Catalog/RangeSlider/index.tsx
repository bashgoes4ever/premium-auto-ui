import React, { useCallback, useState } from 'react';
import RangeSlider from 'react-range-slider-input';
import styles from './RangeSlider.module.scss';
import 'react-range-slider-input/dist/style.css';

type Props = {
	min: number;
	max: number;
	step: number;
	onChange: (value: [number, number]) => void;
	defaultValue?: [number, number];
	formatValue?: (val: number) => string;
}

const Range: React.FC<Props> = React.memo(({ min, max, step, onChange, formatValue, defaultValue = [min, max] }) => {
	const [value, setValue] = useState<[number, number]>([min, max]);

	const onInput = useCallback((val) => {
		setValue(val);
		onChange(value);
	}, [onChange, value]);

	return (
		<div className={ styles.wrapper }>
			<div className={ styles.value }>{ formatValue ? formatValue(value[0]) : value[0] }</div>
			<div className={ styles.value }>{ formatValue ? formatValue(value[1]) : value[1] }</div>
			<RangeSlider
				min={ min }
				max={ max }
				step={ step }
				defaultValue={ defaultValue }
				onInput={ onInput }
				className={ styles.slider }
			/>
		</div>
	);
});

Range.displayName = 'RangeSlider';
export default Range;