import React from 'react';
import styles from './Block2.module.scss';

const Block2: React.FC = () => {
	return (
		<div className={ styles.wrapper }>
			<div className="container">
				<div className={ styles.suptitle }>С нашей стороны сделаем все чтобы :</div>
				<h2 className={ styles.title }>Вы получили проверенный автомобиль <br />с доставкой, растоможкой и
					постановкой на учет в России
				</h2>

				<div className={ styles.flex }>
					<div className={ styles.card }>
						<div className={ styles.number }>01</div>
						<div className={ styles.line }></div>
						<h4>Федеральная сеть Premium работает уже более 10 лет</h4>
						<p>С 2021 года работает инфраструктура Premium auto, по поставке НОВЫХ или возрастом до 5 лет,
							премиальных автомобилей с рынков Китая, США, Европы или ОАЭ.</p>
					</div>
					<div className={ styles.card }>
						<div className={ styles.number }>02</div>
						<div className={ styles.line }></div>
						<h4>Фото и видео отчёты на каждом этапе пригона авто</h4>
						<p>Проводим все необходимые таможенные процедуры, установку системы вызова с определением по
							ГЛОНАСС, получение СГБТС, ЭПТС, прохождение процедуры оплаты утильвзноса</p>
					</div>
					<div className={ styles.card }>
						<div className={ styles.number }>03</div>
						<div className={ styles.line }></div>
						<h4>Репутация надёжного и ответственного партнёра</h4>
						<p>Наш дружный коллектив неизменен долгие годы, так как политику взаимной выгоды, надёжных и
							открытых отношений, мы применяем к клиентам и собственным сотрудникам.</p>
					</div>
					<div className={ styles.card }>
						<div className={ styles.number }>04</div>
						<div className={ styles.line }></div>
						<h4>Наши представители в Китае, США, Европе и других странах</h4>
						<p>Наши представители организуют подбор, подготовку и контроль отправки автомобилей в Россию,
							Белоруссию, Грузию, Киргизию или Казахстан. </p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Block2;