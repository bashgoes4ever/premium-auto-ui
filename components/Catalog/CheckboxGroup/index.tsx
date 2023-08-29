import React, { useCallback, useState } from 'react';
import Checkbox from '../../Fields/Checkbox/index';
import styles from './CheckboxGroup.module.scss';

export type CheckboxType = {
	name: string;
	label: string;
	value?: boolean;
	additionalInfo: string;
}

type Props = {
	checkboxes: CheckboxType[];
	onSelect: (selected: Array<CheckboxType['name']>) => void;
}

const CheckboxGroup: React.FC<Props> = React.memo(({ checkboxes: checkboxesProp, onSelect }) => {
	const [checkboxes, setCheckboxes] = useState<CheckboxType[]>(checkboxesProp);

	const onClick = useCallback((value: boolean, name: string) => {
		setCheckboxes((cb) => {
			const index = cb.findIndex((val) => val.name === name);
			cb[index].value = value;
			return cb;
		});

		onSelect(checkboxes.filter(({ value }) => value).map(({ name }) => name));
	}, [checkboxes, onSelect]);

	return checkboxes.map(({ name, label, value, additionalInfo }: CheckboxType) => (
		<Checkbox
			key={ name }
			name={ name }
			label={ label }
			isChecked={ value }
			additionalInfo={ additionalInfo }
			onClick={ onClick }
			className={ styles.checkbox }
		/>
	));
});

CheckboxGroup.displayName = 'CheckboxGroup';
export default CheckboxGroup;