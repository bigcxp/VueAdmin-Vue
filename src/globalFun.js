import Vue from "vue"

//mixin的作用是多个组件可以共享数据和方法，在使用mixin的组件中引入后，mixin中的方法和属性也就并入到该组件中，可以直接使用，在已有的组件数据和方法进行了扩充。引入mixin分全局引用和局部引用
Vue.mixin({
	methods: {
		hasAuth(perm) {
			var authority = this.$store.state.menus.permList

			return authority.indexOf(perm) > -1
		}
	}
})