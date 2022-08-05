<template>
	<view class="box">
		<u-tabs class="tab-box" :list="weeks" @click="click"></u-tabs>
		<uni-card spacing="0" padding="0" v-for="(week, index) in weeks" :key="index">
			<u-collapse @change="change" @close="close" @open="open">
				<u-collapse-item
					:title="item.time"
					name="Docs guide"
					v-for="(item, index) in week.class"
					:key="index"
				>
					<u-cell-group :border="false">
						<text v-for="(student, index) in item.students" :key="index">sdfs</text>
						<!-- <u-cell
							title="单元格"
							:border="false"
							v-for="(student, index) in item.students"
							:key="index"
						>
							<view class="cell-menu" slot="value">
								<u-button class="menu-send" text="发送"></u-button>
								<u-button class="menu-edit" text="编辑"></u-button>
							</view>
						</u-cell> -->
					</u-cell-group>
				</u-collapse-item>
			</u-collapse>
		</uni-card>
	</view>
</template>

<script>
import weeks from '../data/student.json';

export default {
	data() {
		return {
			weeks: weeks
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
	/deep/ .u-collapse-item__content__text {
		padding: 0 0 !important;
	}
	.cell-menu {
		display: flex;
		flex-direction: row;
		justify-content: center;
		.u-button {
			width: 100rpx;
			height: 60rpx;
			margin-left: 20rpx;
			color: #fff;
		}
		.menu-send {
			background-color: #e67470;
		}
		.menu-edit {
			background-color: #f0b054;
		}
	}
}
</style>
