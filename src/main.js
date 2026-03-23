import Vue from 'vue'
import App from './App'

require('font-awesome/css/font-awesome.css')

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
