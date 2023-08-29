import React from 'react';
import styles from './Block6.module.scss';
import Image from 'next/image';
import bgImg from '../../../public/images/7.png';
import bgImg2 from '../../../public/images/8.png';
import signatureIcon from '../../../public/images/9.svg';

const Block6: React.FC = React.memo(() => {
	return (
		<div className={ styles.wrapper }>
			<Image src={ bgImg } alt="" className={ styles.bg } />
			<div className="container">
				<Image src={ bgImg2 } alt="" className={ styles.bg2 } />
				<div className={ styles.topRow }>
					<div className={ styles.left }>
						<h2>Здравствуйте! <br />Я Александр Тарасов, <br />и от себя лично <br />я гарантирую:</h2>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
							labore et dolore magna aliqua. Ut enim Lorem ipsum dolor sit amet, consectetur adipiscing
							elit,
							sed do eiusmod</p>
					</div>
					<div className={ styles.right }>
						<p>Наша компания занимаеться с 2008 года. мы предоставляем максимально комфортный сервис на всех
							этапах</p>
						<div className={ styles.name }>
							<h5>Александр Тарасов</h5>
							<h6>Генеральный директор <br />Premium - Auto </h6>
							<Image src={ signatureIcon } alt="" className={ styles.sig } />
						</div>
					</div>
				</div>
				<div className={ styles.bottomRow }>
					<div className={ styles.item }>
						<div className={ styles.itemTitle }>
							<span>15</span> лет
						</div>
						<p>Мы занимаемся продажей автомобилей</p>
					</div>
					<div className={ styles.item }>
						<div className={ styles.itemTitle }>
							<span>7</span> офисов
						</div>
						<p>В разных странах и городах нашей страны</p>
					</div>
					<div className={ styles.item }>
						<div className={ styles.itemTitle }>
							<span>3000</span>
						</div>
						<p>Автомобилей пригнали из Китая, США, Европы и ОАЭ</p>
					</div>
					<div className={ styles.item }>
						<div className={ styles.itemTitle }>
							<span>15</span> лет
						</div>
						<p>Мы занимаемся продажей автомобилей</p>
					</div>
				</div>
			</div>
		</div>
	);
});

Block6.displayName = 'Block6';
export default Block6;