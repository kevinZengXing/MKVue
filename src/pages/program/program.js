import Vue from 'vue'
import program from './program.vue'
// import router from './router'

Vue.config.productionTip = true

/* eslint-disable no-new */
new Vue({
  el: '#app',
  // router,
  render: h => h(program)
  // components: { program }
})
