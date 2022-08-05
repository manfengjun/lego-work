<template>
	<view class="box">
		<u-tabs class="tab-box" :list="weeks" @change="change"></u-tabs>
		<view
			v-if="select == week.week"
			class="week-box"
			v-for="(week, w_index) in weeks"
			:key="w_index"
		>
			<view
				class="class-box"
				:title="item.time"
				name="Docs guide"
				v-for="(item, c_index) in week.class"
				:key="c_index"
				v-show="item.students.length > 0"
			>
				<view class="class-header"><u--text :text="item.time"></u--text></view>
				<uni-card spacing="0" padding="0">
					<u-cell-group :border="false">
						<u-cell
							:title="student.name"
							:border="false"
							v-for="(student, s_index) in item.students"
							:key="s_index"
							@click="tooltip(week, item, student)"
						>
							<view class="cell-menu" slot="value">
								<u-button class="menu-send" text="发送"></u-button>
								<u-button class="menu-edit" text="编辑"></u-button>
							</view>
						</u-cell>
					</u-cell-group>
				</uni-card>
			</view>
		</view>
		<u-popup :show="show" mode="center" @close="show = false">
			<view>
				<text>{{ toast }}</text>
			</view>
		</u-popup>
	</view>
</template>

<script>
import weeks from '../data/student.json';

export default {
	data() {
		return {
			select: 2,
			weeks: weeks,
			show: false,
			toast: ''
		};
	},
	methods: {
		change(e) {
			this.select = e.week;
		},
		tooltip(week, item, student) {
			this.generate(week, item, student);
			this.show = true;
		},
		generate(week, item, student) {
			let weekTimes = this.getWeekList(new Date(), 'current', '-');
			console.log(weekTimes);
			let date = new Date();
			let timeStr = '';
			let noonStr = '';
			if (date.getDay() == week.week) {
				timeStr = uni.$u.timeFormat(date, 'mm月dd日');
				console.log(timeStr);
				noonStr = '今天';
			} else {
				noonStr = '明天';
				let result = weekTimes.filter(t => t.getDay() == week.week);
				timeStr = uni.$u.timeFormat(result[0], 'mm月dd日');
			}
			let isAm = date.getDay() == week.week ? '今天' : '明天';
			this.toast =
				student.petName +
				'妈妈您好[愉快]\n☘️' +
				noonStr +
				item.time.slice(0, 2) +
				'有咱们宝贝的乐高课，记得准时到课哈[玫瑰]\n⏰上课时间：' +
				'' +
				timeStr +
				'(' +
				week.name +
				')' +
				item.time +
				'\n🏠上课教室：' +
				item.room +
				'\n👨‍🏫授课老师：君君老师\n温馨提示：\n①请佩戴口罩，签到进店\n②校区有开水，可以为宝贝带上水杯\n③校区有开空调，可为宝贝带上薄外套\n‍——————— ——————————\n📖锋格练字正式上线啦[哇]\n👉五岁以上的宝贝均可报名参加体验🔥️\n☝️预售优惠名额有限，快快找我抢购吧🖐️';
		},
		/*
		 *@params date 时间对象/时间字符串/时间戳等等
		 *@params type {String}  值：prev/current/next 上周/本周/下周
		 *@params fmt {String} 日期连接符
		 */
		getWeekList(date, type, fmt) {
			let arr = [];
			// 格式化日期
			const dateFormat = (date, fmt) => {
				let y = date.getFullYear(); // 年
				let m = date.getMonth() + 1; // 月
				let d = date.getDate(); // 日
				return `${y}${fmt}${m}${fmt}${d}`;
			};

			let currentDate = new Date(date);
			let w = currentDate.getDay(); // 当前星期 0-6
			let y = currentDate.getFullYear(); // 当前年
			let m = currentDate.getMonth() + 1; // 当前月
			let d = currentDate.getDate(); // 当前日期
			if (w === 0) w = 7;
			// 先算出周一是几号 根据type类型计算
			let Monday = 0;
			// 获取周一的年份 月份 日期
			const getMonday = zf => {
				if (zf <= 0) {
					// 日期小于0 且当前星期不是0
					if (m - 1 <= 0) {
						// 月份<=0 年份-1
						y = y - 1; // 年份 -1
						m = 12; // 月份 = 12
						let n = d - (w - 1); // 负的星期
						Monday = new Date(y, m, 0).getDate() + n;
					} else {
						m = m - 1; // 月份 -1
						let n = d - (w - 1); // 负的星期
						Monday = new Date(y, m, 0).getDate() + n;
					}
				} else if (zf > 0) {
					// 日期大于0
					Monday = d - (w - 1);
				}
			};
			// 本周一
			switch (type) {
				case 'current': // 本周
					break;
				case 'prev': // 上一周
					if (d - 7 < 0) {
						if (m - 1 < 1) {
							m = 12;
							y = y - 1;
							d = new Date(y, m, 0).getDate() + (d - 7);
						} else {
							m = m - 1;
							d = new Date(y, m, 0).getDate() + (d - 7);
						}
					} else {
						d = d - 7;
					}
					break;
				case 'next': // 下一周
					if (d + 7 > new Date(y, m, 0).getDate()) {
						if (m + 1 > 12) {
							m = 1;
							y = y + 1;
							d = d + 7 - new Date(y - 1, 12, 0).getDate(); // d + 7 大于 12月的天数多少天 就是几号
						} else {
							m = m + 1;
							d = d + 7 - new Date(y, m - 1, 0).getDate();
						}
					} else {
						d = d + 7;
					}
					break;
			}
			getMonday(d - (w - 1)); // 获取周一日期

			// 获取日期
			const getDate = (mon, i) => {
				if (mon + i > new Date(y, m, 0).getDate()) {
					// 大于当月天数
					Monday = -i + 1;
					mon = 1;
					if (m + 1 > 12) {
						y += 1;
						m = 1;
					} else {
						m += 1;
					}
					return new Date(`${y}-${m}-${mon}`);
				}

				return new Date(`${y}-${m}-${mon + i}`);
			};
			// currentDate = new Date(y, m, Monday, 0)
			// 往后推7天
			for (let i = 0; i < 7; i++) {
				arr[i] = getDate(Monday, i);
			}
			return arr;
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
	.class-header {
		margin: 30rpx;
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
			border-radius: 30rpx;
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
