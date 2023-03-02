import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import axios from 'axios'
import { store } from './vuex'

import './assets/css/app.css'

Vue.config.productionTip = false
Vue.component('farm-navbar', require('./components/FarmNavbar/FarmNavbar.vue').default)
Vue.component('farm-header', require('./components/FarmHeader/FarmHeader.vue').default)
Vue.component('farm-filter', require('./components/FarmFilter/FarmFilter.vue').default)
Vue.component('farm-country', require('./components/FarmCountry/FarmCountry.vue').default)
Vue.component('farm-card-info', require('./components/FarmCountry/FarmCardInfo/FarmCardInfo.vue').default)
Vue.component('farm-main', require('./components/FarmMain/FarmMain.vue').default)
Vue.component('farm-more-info', require('./components/FarmCountry/FarmMoreInfo/FarmMoreInfo.vue').default)


axios.defaults.baseURL = 'https://api.covid19api.com'

new Vue({
  vuetify,
  render: h => h(App),
  store
}).$mount('#app')
