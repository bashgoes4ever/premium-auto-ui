import React, { ButtonHTMLAttributes } from 'react';
import { classNames } from '../../utils/classNames';
import styles from './Button.module.scss';

type Theme = 'primary' | 'secondary' | 'warning' | 'light';
type Size = 'big' | 'medium' | 'small' | 'xsmall';
type Shape = 'normal' | 'round' | 'square'

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
	theme?: Theme;
	size?: Size;
	shape?: Shape;
	className?: string;
}

const Button: React.FC<Props> = React.memo(
	({ children, className, shape, theme = 'primary', size = 'medium', ...restProps }) => {
		const { disabled } = restProps;

		return (
			<button
				className={
					classNames(
						styles.btn,
						{ [styles.disabled]: disabled },
						[className, styles[theme], styles[size], styles[shape]]
					)
				}
				{ ...restProps }
			>
				{ children }
			</button>
		);
	});

Button.displayName = 'Button';
export default Button;