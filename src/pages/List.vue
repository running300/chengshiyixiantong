<template>
	<div class="container">
		<common-header :title="title"></common-header>
		<tab></tab>
		<list-scroll-wrapper></list-scroll-wrapper>
	</div>
</template>

<script>
	import fieldDatas from '@/assets/data/fields';
  import { mapState } from 'vuex';

	import CommonHeader from '@/components/Header/Common';
	import Tab from '@/components/Tab/Index';
	import ListScrollWrapper from '@/components/ScrollWrapper/List';

	export default {
		name: 'List',
		components: {
			CommonHeader,
			Tab,
			ListScrollWrapper
		},
		computed: {
      ...mapState(['field']),

			title () {
        if (this.field) {
        	return fieldDatas.filter((item) => item.field === this.field)[0].iconText + '列表';
        }
			}
		}
	}
</script>

<style lang="scss" scoped>
	
</style>