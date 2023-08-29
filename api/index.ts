import axios, { AxiosResponse } from 'axios';
import carImage from '../public/images/1.png';
import carImage2 from '../public/images/2.jpg';
import carImage3 from '../public/images/3.jpg';
import countryIcon from '../public/icons/main-page/china.svg';
import { StaticImageData } from 'next/image';

// const instance = axios.create({
// baseURL: process.env.MIX_APP_BASE_PATH,
// });

// instance.interceptors.request.use(
//   config => {
//     // const accessToken = Cookies.get("accessToken");
//     // if (accessToken) {
//     //     config.headers.Authorization = `Bearer ${accessToken}`;
//     // }
//     return config;
//   },
//   err => {
//     return Promise.reject(err);
//   }
// );

// export const login = resource => {
//   return instance.post("/api/login", { ...resource });
// };
//
// export const getWorkstation = (workstationId, currentLocale) => {
//   return instance.get(
//     "/api/" + currentLocale + "/workstations/" + workstationId
//   );
// };
//
// export const createWorkstation = (resource, currentLocale) => {
//   return instance.post("/api/" + currentLocale + "/workstations/", {
//     ...resource
//   });
// };
//
// export const updateWorkstation = (workstationId, resource, currentLocale) => {
//   return instance.patch(
//     "/api/" + currentLocale + "/workstations/" + workstationId,
//     {
//       ...resource
//     }
//   );
// };

const YMAPS_API_KEY = 'b34f9d96-e9b8-4934-8fb7-870147fe9b27';

type YmapsResponse = {
	response: {
		GeoObjectCollection: {
			featureMember: Array<{
				GeoObject: {
					Point: {
						pos: string
					}
				}
			}>
		}
	}
}
export const getMapPointByAddress = async (address: string) => {
	const res = await axios.get<any, AxiosResponse<YmapsResponse>>('https://geocode-maps.yandex.ru/1.x', {
		params: {
			apikey: YMAPS_API_KEY,
			format: 'json',
			geocode: address
		}
	});
	return res.data?.response?.GeoObjectCollection?.featureMember[0]?.GeoObject?.Point?.pos;
};

const delay = new Promise((res) => {
	setTimeout(res, 1000);
});

export type CarItem = {
	id: number;
	image: StaticImageData;
	name: string;
	countryIcon: StaticImageData;
	countryName: string;
	countryVerbose: string;
	description: string;
	options: Array<{
		key: string;
		value: string;
	}>;
	price: number;
	discount?: number;
	isAvailable?: boolean;
	specs: string[];
}

export const getCars = (): Promise<CarItem[]> => {
	return delay.then(() => ([
		{
			id: 1,
			image: carImage,
			name: 'Haval FX 7',
			description: '2007 г. / 2л двигатель / пробег 102 000 км',
			countryIcon: countryIcon,
			countryName: 'Китай',
			countryVerbose: 'Китая',
			price: 2350000,
			discount: 25,
			isAvailable: true,
			options: [
				{
					key: 'Цена покупки в китае',
					value: '10 000 юаней'
				},
				{
					key: 'Расходы по растаможке',
					value: '400 000 руб'
				},
				{
					key: 'Расходы по китаю + фрахт',
					value: '115 000 руб'
				},
				{
					key: 'Оформление документов + глонас',
					value: '92 000 руб'
				},
				{
					key: 'Наши услуги за транспортировку',
					value: '92 000 руб'
				}
			],
			specs: ['2022 г.', '2.0 Бензин', 'Автомат', '15200 км.', '180 ЛС', 'Правый']
		},
		{
			id: 2,
			image: carImage2,
			name: 'Toyota Supra ',
			description: '2022 г. / 3.5л двигатель / пробег 2 600 км',
			countryIcon: countryIcon,
			countryName: 'Япония',
			countryVerbose: 'Японии',
			price: 4350000,
			discount: 15,
			options: [
				{
					key: 'Цена покупки в Японии',
					value: '10 000 юаней'
				},
				{
					key: 'Расходы по растаможке',
					value: '400 000 руб.'
				},
				{
					key: 'Расходы по китаю + фрахт',
					value: '115 000 руб'
				},
				{
					key: 'Оформление документов + глонас',
					value: '92 000 руб'
				},
				{
					key: 'Наши услуги за транспортировку',
					value: '92 000 руб'
				}
			],
			specs: ['2022 г.', '2.0 Бензин', 'Автомат', '15200 км.', '180 ЛС', 'Правый']
		},
		{
			id: 3,
			image: carImage3,
			name: 'Toyota Mark X ',
			description: '2019 г. / 2.5л двигатель / пробег 82 100 км',
			countryIcon: countryIcon,
			countryName: 'Япония',
			countryVerbose: 'Японии',
			price: 1150000,
			discount: 15,
			options: [
				{
					key: 'Цена покупки в Японии',
					value: '10 000 юаней'
				},
				{
					key: 'Расходы по растаможке',
					value: '400 000 руб.'
				},
				{
					key: 'Расходы по китаю + фрахт',
					value: '115 000 руб'
				},
				{
					key: 'Оформление документов + глонас',
					value: '92 000 руб'
				},
				{
					key: 'Наши услуги за транспортировку',
					value: '92 000 руб'
				}
			],
			specs: ['2022 г.', '2.0 Бензин', 'Автомат', '15200 км.', '180 ЛС', 'Правый']
		}
	]));
};