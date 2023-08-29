import React from 'react';
import Image from 'next/image';
import icon from '../../../public/icons/call.svg'
import { PHONE_NUMBER_HREF } from '../../../config/constants';
import styles from './CallbackBtn.module.scss'

const CallbackBtn = React.memo(() => {
	return (
		<a href={`tel:${PHONE_NUMBER_HREF}`} className={styles.btn}>
			<Image src={icon} alt="Позвонить" />
		</a>
	);
});

CallbackBtn.displayName = 'CallbackBtn'
export default CallbackBtn;