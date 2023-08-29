'use client';

import React, { useCallback, useEffect, useState } from 'react';
import styles from './Block8.module.scss';
import { classNames } from '../../../utils/classNames';
import useEmblaCarousel, { EmblaCarouselType } from 'embla-carousel-react';
import Image from 'next/image';
import image from '../../../public/images/11.png';

const options = [
	'Техническое состояние',
	'Стоимость автомобиля',
	'Пробег',
	'Качество сборки',
	'Чистая история авто',
	'Богатая комплектация',
	'Разнообразия двигателей',
	'Осмотр перед покупкой',
	'Цены',
	'Дополнительные опции'
];

const slides = options.map((title) => ({
	title,
	text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore' +
		' et dolore magna aliqua. Ut enim do eiusmod tempor incididunt ut labore et dolore magna aliqua magna aliqua.',
	image
}));

const Block8: React.FC = React.memo(() => {
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
		<div className={ styles.wrapper }>
			<div className={ classNames(styles.flex, {}, ['container']) }>
				<div className={ styles.left }>
					<h2>Преимущества покупки <br />автомобиля из Китая, США <br />или Европы.</h2>
					<h5>Наведите на любой из пунктов, чтобы прочитать подробнее</h5>
					<div className={ styles.options }>
						{ options.map((option, index) => (
							<div
								key={ index }
								className={ classNames(styles.option, { [styles.optionActive]: index === step }) }
								onClick={ () => scrollTo(index) }
							>
								{ option }
							</div>
						)) }
					</div>
				</div>
				<div className={ styles.right } ref={ emblaRef }>
					<div className={ styles.sliderContainer }>
						{
							slides.map(({ title, text, image }, index) => (
								<div
									key={ index }
									className={ classNames(styles.slide, { [styles.activeSlide]: index === step }) }
								>
									<div className={ styles.slideWrapper }>
										<div className={ styles.image }>
											<Image src={ image } alt={ title } />
										</div>
										<div className={ styles.slideContent }>
											<h3>{ title }</h3>
											<p>{ text }</p>
										</div>
									</div>
								</div>
							))
						}
					</div>
				</div>
			</div>
		</div>
	);
});

Block8.displayName = 'Block8';
export default Block8;