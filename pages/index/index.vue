<template>
	<view class="box">
		<u-cell-group>
			<u-cell icon="clock" title="周一" isLink url="/pages/index/class?week=1"></u-cell>
			<u-cell icon="clock" title="周二" isLink url="/pages/index/class?week=2"></u-cell>
			<u-cell icon="clock" title="周三" isLink url="/pages/index/class?week=3"></u-cell>
			<u-cell icon="clock" title="周四" isLink url="/pages/index/class?week=4"></u-cell>
			<u-cell icon="clock" title="周五" isLink url="/pages/index/class?week=5"></u-cell>
			<u-cell icon="clock" title="周六" isLink url="/pages/index/class?week=6"></u-cell>
			<u-cell icon="clock" title="周日" isLink url="/pages/index/class?week=0"></u-cell>
		</u-cell-group>
	</view>
</template>

<script>
export default {
	data() {
		return {
			href: 'https://uniapp.dcloud.io/component/README?id=uniui'
		};
	},
	methods: {}
};
</script>

<style></style>
