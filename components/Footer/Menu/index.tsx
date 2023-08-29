import React from 'react';
import { LinkData } from '../../../config/types';
import { routes } from '../../../config/routes';
import Link from 'next/link';
import { EMAIL, PHONE_NUMBER } from '../../../config/constants';
import Button from '../../Button/index';
import styles from './Menu.module.scss';
import { classNames } from '../../../utils/classNames';
import Socials from '../../Socials/index';

const links1: LinkData[] = [
	{
		name: 'ОТЗЫВЫ',
		link: routes.reviews
	},
	{
		name: 'О КОМПАНИИ',
		link: routes.about
	},
	{
		name: 'БЛОГ',
		link: routes.blog
	},
	{
		name: 'КОНТАКТЫ',
		link: routes.contacts
	}
];

const links2: LinkData[] = [
	{
		name: 'Авто из США',
		link: routes.catalog
	},
	{
		name: 'Авто из Китая',
		link: routes.catalog
	},
	{
		name: 'Авто из ОАЭ',
		link: routes.catalog
	},
	{
		name: 'Прочее',
		link: routes.catalog
	}
];

const links3: LinkData[] = [
	{
		name: 'Растаможка авто',
		link: routes.catalog
	},
	{
		name: 'Получение полного пакета документов',
		link: routes.catalog
	},
	{
		name: 'Регистрация в РФ',
		link: routes.catalog
	},
	{
		name: 'Гарантия и техническое обслуживание',
		link: routes.catalog
	}
];

const Menu = React.memo(() => {
	return (
		<footer className={ styles.wrapper }>
			<div className={ styles.top }>
				<div className={ classNames(styles.topRow, {}, ['container']) }>
					<ul className={ classNames(styles.topCol, {}, [styles.topCol1]) }>
						<li>ДОП. УСЛУГИ</li>
						{
							links1.map(({ link, name }) => (
								<li key={ name }>
									<Link href={ link }>{ name }</Link>
								</li>
							))
						}
					</ul>
					<ul className={ classNames(styles.topCol, {}, [styles.topCol2]) }>
						<li>КАТАЛОГ</li>
						{
							links2.map(({ link, name }) => (
								<li key={ name }>
									<Link href={ link }>{ name }</Link>
								</li>
							))
						}
					</ul>
					<ul className={ classNames(styles.topCol, {}, [styles.topCol3]) }>
						<li className={ styles.title }>Дополнительные услуги</li>
						{
							links3.map(({ link, name }) => (
								<li key={ name }>
									<Link href={ link }>{ name }</Link>
								</li>
							))
						}
					</ul>
					<div className={ styles.topCol4 }>
						<div className={ styles.title }>ГОРЯЧАЯ ЛИНИЯ</div>
						<div className={ styles.phone }>{ PHONE_NUMBER }</div>
						<div className={ styles.phoneText }>Звонки бесплатно по всей територии РФ</div>
						<div className={ styles.email }>{ EMAIL }</div>
						<Button theme="warning" size="small" className={ styles.btn }>Написать нам</Button>
					</div>
				</div>
			</div>
			<div className={ classNames(styles.bottomRow, {}, ['container']) }>
				<Link className={ styles.logo } href={ routes.index }>PREMIUM-AUTO</Link>
				<div className={ styles.bottomRowRight }>
					<div className={ styles.bottomRowLinks }>
						<a href="" target="_blank" className={ styles.bottomRowLink }>Политика конфиденциальности</a>
						<a href="" target="_blank" className={ styles.bottomRowLink }>Пользловательское соглашение</a>
					</div>
					<Socials size="big" />
				</div>
			</div>
			<div className={ styles.row3 }>
				<div className={ classNames(styles.row3Wrapper, {}, ['container']) }>
					<div className={ styles.row3Text }>Все права защищены © 2021. При копировании текст посылается на
						сайт Premium - Auto.ru
					</div>
					<div className={ styles.row3Text }>Сайт разработан командой <a href="http://Axis-Marketing.ru"
						target="_blank">Axis-Marketing.ru</a></div>
				</div>
			</div>
		</footer>
	);
});

Menu.displayName = 'FooterMenu';
export default Menu;