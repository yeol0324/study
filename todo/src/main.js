import Vue from 'vue'
import App from './App.vue'
import store from './store' //index면 생략 가능

Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
