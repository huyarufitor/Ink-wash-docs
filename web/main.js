import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import httpServer from '@/service/httpServer' // axios拦截器配置
import * as mUtils from '@/common/js/mUtils'
import AES from '@/common/js/secret'
import config from '@/config'
import filters from './filters/index'
import * as API from '@/api/index'

import '@/common/styles/element-variables.scss'
import '@/common/styles/index.scss' // 自定义 css

/**
 * 引入公共方法mUtils
 */
Vue.prototype.$mUtils = mUtils;
Vue.prototype.$AES = AES;
Vue.prototype.$axios = httpServer;
Vue.prototype.$api = API;

/**
 * 公共配置信息
 */
Vue.prototype.$config = config

// 注册全局过滤器
Object.keys(filters).forEach(key => {
	Vue.filter(key, filters[key])
})

// 全局注册mixins


String.prototype.replaceAll = function(s1, s2) {
	return this.replace(new RegExp(s1, "gm"), s2);
}

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')