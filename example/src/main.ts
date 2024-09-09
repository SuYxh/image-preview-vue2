import Vue from 'vue'
import App from './App.vue'
import './style.css'
import '../../dist/assets/style.css'

Vue.config.productionTip = false

const vue = new Vue({
  render: (h) => h(App)
})

vue.$mount('#app')
