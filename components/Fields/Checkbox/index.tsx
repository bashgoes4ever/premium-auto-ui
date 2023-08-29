import React, { useCallback, useState } from 'react';
import { classNames } from '../../../utils/classNames';
import styles from './Checkbox.module.scss';

type Props = {
	label: string;
	name: string;
	onClick: (value: boolean, name: string) => void;
	isChecked?: boolean;
	additionalInfo?: string | JSX.Element;
	className?: string;
}

const Checkbox: React.FC<Props> = React.memo((props) => {
	const { label, name, additionalInfo, onClick: onClickProp, className, isChecked: isCheckedProp = false } = props;

	const [isChecked, setIsChecked] = useState<boolean>(isCheckedProp);

	const onClick = useCallback(() => {
		setIsChecked((isChecked) => {
			onClickProp(!isChecked, name);
			return !isChecked;
		});
	}, [name, onClickProp]);

	return (
		<div className={ classNames(styles.wrapper, { [styles.checked]: isChecked }, [className]) }>
			<div className={ styles.input } onClick={ onClick }>
				<div className={ styles.checkbox } />
				<div className={ styles.label }>{ label }</div>
			</div>

			<div className={ styles.additional }>{ additionalInfo }</div>
		</div>
	);
});

Checkbox.displayName = 'Checkbox';
export default Checkbox;