'use client';

import React, { useCallback, useEffect, useState } from 'react';
import styles from './Block5.module.scss';
import { classNames } from '../../../utils/classNames';
import Image from 'next/image';
import bgImg from '../../../public/images/5.png';
import carImg from '../../../public/images/6.png';
import useEmblaCarousel, { EmblaCarouselType } from 'embla-carousel-react';

const progressBar = [
	{
		content: <>Знакомство <br />и консультация</>
	},
	{
		content: <>Подбор авто</>
	},
	{
		content: <>Покупка авто <br />и заключение договора</>
	},
	{
		content: <>Прохождение <br />таможни</>
	},
	{
		content: <>ПЕРЕДАЧА АВТО</>
	}
];

const slides = [
	{
		title: <>Первичная консультация</>,
		bullets: [
			{
				text: 'Уточняем все ваши нюансы. Марку, модель, характеристики, опции цвет и другие параметры.'
			}
		]
	},
	{
		title: <>Подбор автомобиля <br />и первичный договор</>,
		bullets: [
			{
				text: <>Производим подбор авто в течение двух - пяти дней</>
			},
			{
				text: <>Проверяем по 30 критериям проверки</>
			},
			{
				text: <>Если автомобиль вас устраивает заключаем предварительный договор</>
			},
			{
				text: <>Вностие оплату 50т руб. (за услуги подбора и поиска)</>
			}
		]
	},
	{
		title: <>Покупка авто <br />и заключение договора</>,
		bullets: [
			{
				text: <>Заключение договора поставки авто</>
			},
			{
				text: <>Внесение оплаты 60-80% (В эту сумму входит выкуп и оплата затрат на логистику по отправке
					машины, в точку назначения.)</>
			}
		]
	},
	{
		title: <>Проход таможни</>,
		bullets: [
			{
				text: <>Доплата клиентом 25 процентов стоимости от авто за проведение таможенной очистки</>
			},
			{
				text: <>Доставки до Клиента, получение СГБТС и ЭПТС</>
			}
		]
	},
	{
		title: <>Передача авто <br />клиенту</>,
		bullets: [
			{
				text: <>Доплата клиентом 25 процентов стоимости от авто за проведение таможенной очистки</>
			},
			{
				text: <>Доставки до Клиента, получение СГБТС и ЭПТС</>
			}
		]
	}
];

const Block5: React.FC = React.memo(() => {
	const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false });
	const [step, setStep] = useState<number>(0);
	const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

	const scrollTo = useCallback(
		(index: number) => emblaApi && emblaApi.scrollTo(index),
		[emblaApi]
	);

	const onInit = useCallback((emblaApi: EmblaCarouselType) => {
		setScrollSnaps(emblaApi.scrollSnapList());
	}, []);

	const onSelect = useCallback((emblaApi: EmblaCarouselType) => {
		setStep(emblaApi.selectedScrollSnap());
	}, []);

	useEffect(() => {
		if (!emblaApi) return;

		onInit(emblaApi);
		onSelect(emblaApi);
		emblaApi.on('reInit', onInit);
		emblaApi.on('reInit', onSelect);
		emblaApi.on('select', onSelect);
	}, [emblaApi, onInit, onSelect]);

	return (
		<div className={ classNames(styles.wrapper, {}, ['container']) }>
			<Image src={ bgImg } alt="" className={ styles.bg } />

			<div className={ styles.content }>
				<h2>Осуществляем полный цикл работ от подбора <br />и проверки авто до пригона автомобиля в ваш город
				</h2>

				<div className={ styles.progressBar }>
					{
						progressBar.map(({ content }, index) => (
							<div
								key={ index }
								onClick={ () => scrollTo(index) }
								className={ classNames(styles.barItem, { [styles.barItemActive]: index === step }) }
							>
								<div className={ styles.circle } />
								<div className={ styles.title }>Этап { index + 1 }</div>
								<p>{ content }</p>
							</div>
						))
					}
				</div>

				<div className={ styles.sliderBlock }>
					<div className={ styles.slider } ref={ emblaRef }>
						<div className={ styles.sliderContainer }>
							{
								slides.map(({ title, bullets }, index) => (
									<div
										key={ index }
										className={ classNames(styles.slide, { [styles.activeSlide]: index === step }) }
									>
										<h3>{ title }</h3>
										<ul>
											{
												bullets.map(({ text }, index2) => <li key={ index2 }>{ text }</li>)
											}
										</ul>
									</div>
								))
							}
						</div>
					</div>
					<Image src={ carImg } alt="" className={ styles.car } />
				</div>


			</div>
		</div>
	);
});

Block5.displayName = 'Block5';
export default Block5;