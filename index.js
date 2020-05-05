import Vue from 'vue';

Vue.prototype.$lazy = {
	components: {},

	load(component) {
		if (!this.components[component]) {
			this.components[component] = () => import(`~/components/${component}`);
		}

		return this.components[component];
	},
};
