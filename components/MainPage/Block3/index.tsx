import React from 'react';
import styles from './Block3.module.scss';
import { classNames } from '../../../utils/classNames';
import Carousel from '../../Carousel/index';
import { CarItem } from '../../../api/index';
import Image from 'next/image';
import { formatNumber } from '../../../utils/misc';

type Props = {
	slides: CarItem[];
}

const Block3: React.FC<Props> = React.memo(({ slides }) => {
	return (
		<div className={ classNames(styles.wrapper, {}, ['container']) }>
			<Carousel title="Автомобили привезенные нами в 2023 году">
				{
					slides.map((slide: CarItem) => {
						const {
							id,
							name,
							image,
							description,
							countryIcon,
							countryVerbose,
							price,
							discount,
							options
						} = slide;

						return (
							<div key={ id } className={ styles.slide }>
								<div className={ styles.image }>
									<Image src={ image } alt={ name } />
								</div>
								<div className={ styles.right }>
									<div className={ styles.topRow }>
										<div>
											<h4>{ name }</h4>
											<p>{ description }</p>
										</div>
										<div className={ styles.countryIcon }>
											<Image src={ countryIcon } alt={ countryVerbose } />
										</div>
									</div>
									<div className={ styles.options }>
										{
											options.map(({ key, value }) => (
												<div key={ `${ key }-${ value }` } className={ styles.option }>
													<div className={ styles.key }>{ key }</div>
													<div className={ styles.dots } />
													<div className={ styles.value }>{ value }</div>
												</div>
											))
										}
									</div>
									<div className={ styles.priceTitle }>Стоимость авто из { countryVerbose } со всеми
										доккументами и растоможкой
									</div>
									<div className={ styles.priceRow }>
										<div className={ styles.price }>{ formatNumber(price) } р.</div>
										<div className={ styles.discount }><span>На { discount }%</span> ниже рынка В РФ
										</div>
									</div>
								</div>
							</div>
						);
					})
				}
			</Carousel>
		</div>
	);
});

Block3.displayName = 'MainPageBlock2';
export default Block3;