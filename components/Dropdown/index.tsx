'use client';

import React, { useCallback, useEffect, useRef, useState } from 'react';
import styles from './Dropdown.module.scss';
import Image from 'next/image';
import icon from '../../public/icons/caret_down.svg';
import { useClickOutside } from '../../utils/useClickOutside';

export type Option<T = string> = {
	disp: string;
	value: T;
}

type Props<T = string> = {
	options: Option<T>[];
	label: string;
	onSelect: (option: Option<T>) => void;
	selectedValue?: Option<T>['value'];
}

const Dropdown: React.FC<Props> = React.memo(({ options, label, onSelect, selectedValue }) => {
	const ref = useRef(null);
	const [selected, setSelected] = useState<Option>({ value: '', disp: '' });
	const [isOpened, setIsOpened] = useState<boolean>(false);

	const onClickOutside = useCallback(() => {
		setIsOpened(false);
	}, []);

	useClickOutside(ref, onClickOutside);

	useEffect(() => {
		if (selectedValue) {
			const selectedOption: Option = options.find((option) => option.value === selectedValue);
			setSelected(selectedOption);
		}
	}, [options, selectedValue]);

	const onClick = useCallback(() => {
		setIsOpened(isOpened => !isOpened);
	}, []);

	const onOptionSelect = useCallback((option: Option) => {
		setSelected(option);
		onSelect(option);
	}, [onSelect]);

	return (
		<div className={ styles.wrapper } onClick={ onClick } ref={ ref }>
			<div className={ styles.label }>{ label }</div>
			<div className={ styles.input }>
				<span>{ selected.disp }</span>
				<Image src={ icon } alt="" className={ isOpened && styles.iconActive } />
			</div>
			{
				isOpened && (
					<div className={ styles.options }>
						{
							options.map((option) => (
								<div
									className={ styles.option }
									key={ option.value }
									onClick={ () => onOptionSelect(option) }
								>
									{ option.disp }
								</div>
							))
						}
					</div>
				)
			}
		</div>
	);
});

Dropdown.displayName = 'Dropdown';
export default Dropdown;