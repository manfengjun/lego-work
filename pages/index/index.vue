<template>
	<view class="box">
		<u-tabs class="tab-box" :list="week" @click="click"></u-tabs>
		<uni-card spacing="0" padding="0">
			<u-collapse @change="change" @close="close" @open="open">
				<u-collapse-item title="6岁 17:50 班级" name="Docs guide">
					<u-cell-group>
					    <u-cell
					        title="单元格"
					    	isLink
					    >
					    	<text
					    	    slot="value"
					    	    class="u-slot-value"
					    	>99</text>
					    </u-cell>
					</u-cell-group>
				</u-collapse-item>
			</u-collapse>
		</uni-card>
	</view>
</template>

<script>
export default {
	data() {
		return {
			week: [
				{
					name: '周二'
				},
				{
					name: '周三'
				},
				{
					name: '周四'
				},
				{
					name: '周五'
				},
				{
					name: '周六'
				},
				{
					name: '周日'
				}
			]
		};
	},
	methods: {
		open(e) {
			// console.log('open', e)
		},
		close(e) {
			// console.log('close', e)
		},
		change(e) {
			// console.log('change', e)
		}
	}
};
</script>

<style lang="scss">
.box {
	/deep/ .u-tabs {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		background-color: #fff;
	}
}
</style>
