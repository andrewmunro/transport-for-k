<template>
	<div class="home">
		<strong>Trains</strong>
		{{ trains.data }}
	</div>
</template>

<script>
// @ is an alias to /src
import trainService from '../service/TrainService';

export default {
	name: 'Home',
	data() {
		return {
			trains: { data: {} }
		};
	},
	async created() {
		this.trains = await trainService.fetch(10000);
		console.table(JSON.parse(JSON.stringify(this.trains.data.departures.all)));
	}
};
</script>
