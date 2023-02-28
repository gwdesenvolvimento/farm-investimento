import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import './assets/css/app.css'


Vue.config.productionTip = false
Vue.component('farm-navbar', require('./components/FarmNavbar/FarmNavbar.vue').default)
Vue.component('farm-header', require('./components/FarmHeader/FarmHeader.vue').default)
Vue.component('farm-filter', require('./components/FarmFilter/FarmFilter.vue').default)
Vue.component('farm-country', require('./components/FarmCountry/FarmCountry.vue').default)
Vue.component('farm-card-info', require('./components/FarmCountry/FarmCardInfo/FarmCardInfo.vue').default)
Vue.component('font-awesome-icon', FontAwesomeIcon)
library.add(faSearch)

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
