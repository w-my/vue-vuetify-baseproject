import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import VueRouter from 'vue-router'
import router from './router'
import axios from 'axios'
import '@/assets/css/base.css'

Vue.use(VueRouter)
Vue.prototype.$axios = axios;
Vue.config.productionTip = false

new Vue({
  vuetify,
  render: h => h(App),
  router: router
}).$mount('#app')
