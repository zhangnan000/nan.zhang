import Vue from 'vue'
import App from './App.vue'
import '@/assets/css/common.css';
import '@/assets/css/base.scss';
import { post, get } from './service/index'

// 定义全局变量
Vue.prototype.$post = post
Vue.prototype.$get = get
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
