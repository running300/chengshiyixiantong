<template>
	<div class="intro-bd">
		<detail-title
      icon="icon-intro"
      title="详细介绍"
		></detail-title>
		<div class="intro-content">{{intro}}</div>
	</div>
</template>

<script>
	import DetailTitle from './Title';

	export default {
		name: 'DetailIntro',
		components: {
			DetailTitle
		},
		props: {
			intro: {
				type: String,
				default () {
					return '加载中...';
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
@import '~@/assets/styles/mixins.scss';

.intro-bd {
	@include flex-column;
	margin-top: .1rem;
	background-color: #fff;
	border-bottom: 1px solid #ddd;
	box-sizing: border-box;

	.intro-content {
		padding: .1rem .15rem;
		font-size: .14rem;
		line-height: .18rem;
		box-sizing: border-box;
		text-indent: 2em;
	}
}	
</style>