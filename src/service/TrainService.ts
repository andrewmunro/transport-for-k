import Service from './Service';

const APP_ID = 'f0068478';
const APP_KEY = '3af69c8bbb8bdfbcea4aab8bad6577b0';

export class TrainService extends Service {
	async getData(stationCode = 'HDY') {
		const data = await fetch(
			`http://transportapi.com/v3/uk/train/station/${stationCode}/live.json?app_id=${APP_ID}&app_key=${APP_KEY}`
		);

		return await data.json();
	}
}

export default new TrainService();
