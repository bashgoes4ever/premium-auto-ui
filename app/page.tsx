import Block1 from '../components/MainPage/Block1/index';
import Block2 from '../components/MainPage/Block2/index';
import Block3 from '../components/MainPage/Block3/index';
import { CarItem, getCars } from '../api/index';
import Catalog from '../components/Catalog/index';
import Block5 from '../components/MainPage/Block5/index';
import Block6 from '../components/MainPage/Block6/index';
import Block7 from '../components/MainPage/Block7/index';

type Data = {
	cars: CarItem[]
}

async function getData(): Promise<Data> {
	const cars = await getCars();

	return {
		cars
	};
}

export default async function Home() {
	const { cars } = await getData();

	return (
		<>
			<Block1 />
			<Block2 />
			<Block3 slides={ cars } />
			<Catalog products={ cars } />
			<Block5 />
			<Block6 />
			<Block7 />
		</>
	);
}