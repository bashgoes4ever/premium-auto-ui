import React, { useCallback, useState } from 'react';
import YouTube from 'react-youtube';
import Image from 'next/image';
import playIcon from '../../public/icons/youtube-btn.svg';
import styles from './YoutubePlayer.module.scss';
import { classNames } from '../../utils/classNames';

type Props = {
	className?: string;
	videoId: number;
	thumbImage: string;
}

const YoutubePlayer: React.FC<Props> = React.memo(({ className, videoId, thumbImage }) => {
	const [loading, setLoading] = useState<boolean>(true);
	const [state, setState] = useState(null);
	const [isPlaying, setIsPlaying] = useState<boolean>(false);

	const onThumbClick = useCallback(() => {
		state.playVideo();
		setIsPlaying(true);
	}, [state]);

	const onPause = useCallback(() => {
		setIsPlaying(false);
	}, []);

	return (
		<div className={ classNames(styles.wrapper, {}, [className]) }>
			{
				!isPlaying && (
					<div className={ styles.thumb } onClick={ onThumbClick }>
						<Image src={ thumbImage } alt="" className={ styles.bg } />
						<Image src={ playIcon } alt="" className={ styles.play } />
					</div>
				)
			}
			<YouTube
				onReady={ (e) => {
					setState(e.target);
					setLoading(false);
				} }
				videoId={ videoId }
				onPause={ onPause }
				opts={ {
					width: '100%',
					height: '100%'
				} }
				className={ styles.youtube }
			/>
		</div>
	);
});

YoutubePlayer.displayName = 'YoutubePlayer';
export default YoutubePlayer;