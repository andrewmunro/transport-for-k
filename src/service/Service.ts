import Vue from 'vue';

export default abstract class Service {
	public async fetch(interval?: number) {
		const data = await this.getData();

		if (!interval) return { data };

		const observableData = Vue.observable({ data });
		const poll = () => {
			setTimeout(async () => {
				observableData.data = { ...(await this.getData()) };
				poll();
			}, interval);
		};
		poll();

		return observableData;
	}

	abstract async getData(): Promise<any>;
}
