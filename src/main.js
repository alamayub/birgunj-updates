import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'

Vue.config.productionTip = false

Vue.mixin({
  methods: {
    localDate(date) {
      return new Date(date).toLocaleString()
    }
  }
})

import VueMeta from 'vue-meta'
Vue.use(VueMeta)

import AOS from 'aos'
import 'aos/dist/aos.css'

new Vue({
  created () { AOS.init() },
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
