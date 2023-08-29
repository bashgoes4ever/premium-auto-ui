import React, { InputHTMLAttributes, useCallback, useState } from 'react';
import { classNames } from '../../../utils/classNames';
import styles from './Input.module.scss';

type Props = InputHTMLAttributes<HTMLInputElement> & {
	name: string;
	placeholder?: string;
	value?: string;
	onInput?: (value: string, name: string) => void;
	className?: string;
}

const Input: React.FC<Props> = React.memo((props) => {
	const { name, placeholder, value: valueProp = '', onInput, className, ...restProps } = props;
	const [value, setValue] = useState<string>(valueProp);

	const onChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
		setValue(() => {
			onInput(e.target.value);
			return e.target.value;
		});

	}, [onInput]);

	return (
		<input
			type="text"
			name={ name }
			placeholder={ placeholder }
			className={ classNames(styles.input, {}, [className]) }
			value={ value }
			onInput={ onChange }
			{ ...restProps }
		/>
	);
});

Input.displayName = 'Input';
export default Input;