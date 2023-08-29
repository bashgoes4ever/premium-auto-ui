'use client';

import React from 'react';
import { classNames } from '../../../utils/classNames';
import styles from './Block7.module.scss';
import YoutubePlayer from '../../YoutubePlayer/index';
import thumbImage from '../../../public/images/10.png';
import Carousel from '../../Carousel/index';

const videoId = 'njJMBaux2aA';

const slides = [
	{
		videoId,
		thumbImage
	},
	{
		videoId,
		thumbImage
	},
	{
		videoId,
		thumbImage
	},
	{
		videoId,
		thumbImage
	},
	{
		videoId,
		thumbImage
	},
	{
		videoId,
		thumbImage
	},
	{
		videoId,
		thumbImage
	},
	{
		videoId,
		thumbImage
	}
];

const Block7: React.FC = React.memo(() => {
	return (
		<div className={ classNames(styles.wrapper, {}, ['container']) }>
			<h2 className={ styles.title }>Посмотрите видео и у вас не останется сомнений, <br />почему стоит доверить
				пригон авто PREMIUM -AUTO
			</h2>

			<div className={ styles.grid }>
				<div className={ styles.gridItem }>
					<YoutubePlayer videoId={ videoId } thumbImage={ thumbImage } className={ styles.youtube } />
				</div>
				<div className={ styles.gridItem }>
					<YoutubePlayer videoId={ videoId } thumbImage={ thumbImage } className={ styles.youtube } />
				</div>
				<div className={ styles.gridItem }>
					<YoutubePlayer videoId={ videoId } thumbImage={ thumbImage } className={ styles.youtube } />
				</div>
			</div>

			<Carousel
				title="Уже 3000 + клиентов получили свой автомобиль"
				options={ {
					slidesToScroll: 3
				} }
			>
				{
					slides.map(({ videoId, thumbImage }, index) => (
						<YoutubePlayer
							key={ index }
							videoId={ videoId }
							thumbImage={ thumbImage }
							className={ styles.slide }
						/>
					))
				}
			</Carousel>
		</div>
	);
});

Block7.displayName = 'Block7';
export default Block7;