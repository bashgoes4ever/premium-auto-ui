import { Address } from './index';

type Point = [number, number]

type UseMapCenterParams = {
	addresses: Address[];
	defaultCenter?: Point;
}

type UseMapCenterResponse = {
	center: Point;
	placeMarks: Point[]
}

const getFullAddress = (address: Address): string => `${ address.city }, ${ address.address }`;

export const useMap = ({ addresses, defaultCenter }: UseMapCenterParams): UseMapCenterResponse => {
	// const [center, setCenter] = useState<Point>(defaultCenter || [55.751574, 37.573856]);
	// const [placeMarks, setPlaceMarks] = useState<Point[]>([]);
	//
	// useLayoutEffect(() => {
	// 	const requests = addresses.map((address, index) => {
	// 		return getMapPointByAddress(getFullAddress(address))
	// 			.then((res) => {
	// 				if (res) {
	// 					const [x, y] = res.split(' ').map((val) => Number(val));
	//
	// 					index === 0 && setCenter([y - 1, x + 4]);
	//
	// 					return [y, x];
	// 				}
	// 			});
	// 	});
	//
	// 	Promise.all(requests).then((coords) => setPlaceMarks(coords));
	// }, [addresses]);

	return {
		center: [54.667518, 41.628208],
		placeMarks: [[55.667518, 37.628208], [56.810611, 60.632392], [57.152985, 65.541227]]
	};
};