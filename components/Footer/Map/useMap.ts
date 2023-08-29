import { useLayoutEffect, useState } from 'react';
import { getMapCenter } from '../../../api/index';

type Point = [number, number]

type UseMapCenterParams = {
	address: string;
	defaultCenter?: Point;
}

type UseMapCenterResponse = {
	point: Point;
}

export const useMapCenter = ({address, defaultCenter}: UseMapCenterParams): UseMapCenterResponse => {
	const [point, setPoint] = useState<Point>(defaultCenter || [55.751574, 37.573856])

	useLayoutEffect(() => {
		getMapCenter(address)
			.then((res) => {
				if (res) {
					const [x, y] = res.split(' ').map((val) => Number(val))
					setPoint([y, x])
				}
			})
	}, [address])

	return { point }
}