import Vue from 'vue'
import App from './App.vue'
import { i18n } from './i18n'
import vSelect from 'vue-select'

Vue.config.productionTip = false

Vue.component('v-select', vSelect)

new Vue({
  i18n,
  render: h => h(App),
}).$mount('#app')