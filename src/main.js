// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import store from './store'
import router from './router'
import App from './App'
import utils from './utils/index'
window.$bus = utils.bus
Vue.prototype.$http = utils.axios

Vue.config.productionTip = false
Vue.config.debug = true

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
