'use client';

import React, { useCallback, useEffect, useState } from 'react';
import styles from './Carousel.module.scss';
import Button from '../Button/index';
import Image from 'next/image';
import prevIcon from '../../public/icons/right.svg';
import nextIcon from '../../public/icons/left.svg';
import useEmblaCarousel, { EmblaCarouselType, EmblaOptionsType } from 'embla-carousel-react';
import { EmblaPluginsType } from 'embla-carousel/components/Plugins';
import { classNames } from '../../utils/classNames';

type Props = {
	title: string;
	options?: EmblaOptionsType;
	plugins?: EmblaPluginsType;
}

const Carousel: React.FC<Props> = React.memo(({ children, title, plugins, options = { loop: false } }) => {
	const [emblaRef, emblaApi] = useEmblaCarousel(options, plugins);
	const [prevBtnDisabled, setPrevBtnDisabled] = useState(true);
	const [nextBtnDisabled, setNextBtnDisabled] = useState(true);
	const [selectedIndex, setSelectedIndex] = useState(0);
	const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

	const scrollPrev = useCallback(
		() => emblaApi && emblaApi.scrollPrev(),
		[emblaApi]
	);

	const scrollNext = useCallback(
		() => emblaApi && emblaApi.scrollNext(),
		[emblaApi]
	);

	const scrollTo = useCallback(
		(index: number) => emblaApi && emblaApi.scrollTo(index),
		[emblaApi]
	);

	const onInit = useCallback((emblaApi: EmblaCarouselType) => {
		setScrollSnaps(emblaApi.scrollSnapList());
	}, []);

	const onSelect = useCallback((emblaApi: EmblaCarouselType) => {
		setSelectedIndex(emblaApi.selectedScrollSnap());
		setPrevBtnDisabled(!emblaApi.canScrollPrev());
		setNextBtnDisabled(!emblaApi.canScrollNext());
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
		<>
			<div className={ styles.titleRow }>
				<h2>{ title }</h2>
				<div className={ styles.buttons }>
					<Button shape="round" onClick={ scrollPrev } disabled={ prevBtnDisabled }>
						<Image src={ prevIcon } alt="icon" />
					</Button>
					<Button shape="round" onClick={ scrollNext } disabled={ nextBtnDisabled }>
						<Image src={ nextIcon } alt="icon" />
					</Button>
				</div>
			</div>
			<div className={ styles.slider } ref={ emblaRef }>
				<div className={ styles.sliderContainer }>
					{ children }
				</div>
			</div>
			<div className={ styles.dots }>
				{ scrollSnaps.map((_, index) => (
					<button
						key={ index }
						onClick={ () => scrollTo(index) }
						className={ classNames(styles.dot, { [styles.selectedDot]: index === selectedIndex }) }
					/>
				)) }
			</div>
		</>
	);
});

Carousel.displayName = 'Carousel';
export default Carousel;