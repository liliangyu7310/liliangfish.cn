import Vue from 'vue'
import App from './App.vue'

import axios from 'axios'


import './fonts/iconfont.css'

Vue.prototype.$http= axios
Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
