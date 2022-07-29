<template>
	<view class="box"><u-tabs :list="list" @click="click"></u-tabs></view>
</template>

<script>
import classes from '../data/class.json';

export default {
	onLoad(options) {
		console.log(classes);
		this.list = classes
			.filter(e => {
				return e.week == options.week;
			})
			.map(e => {
				return { name: e.time };
			});
		console.log(this.list);
	},
	data() {
		return {
			list: [],
			current: 1
		};
	},
	methods: {
		click(index) {
			console.log(index);
			this.current = index;
		}
	}
};
</script>

<style></style>
