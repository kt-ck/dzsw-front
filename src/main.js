// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
/* eslint-disable */
import Vue from 'vue'
import App from './App'
import router from './router'
import 'vue-awesome/icons'
import Icon from 'vue-awesome/components/Icon'
import VueRouter from 'vue-router'
import Axios from 'axios'
import Vuex from 'vuex'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Axios.defaults.headers['Content-Type'] = 'application/x-www-fromurlencodeed'

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

Vue.prototype.$axios = Axios;
Vue.use(VueRouter)
Vue.use(Vuex)
Vue.config.productionTip = false
Vue.component('v-icon', Icon)

const store = new Vuex.Store({
  state: {
    keyword: {},
    emotion: {},
    date: {},
    id: 1,
    diary_list: [],
    isreload: false,
    lastday: '0',
  },
  mutations: {
    putKeyWord (state, msg) {
      state.keyword = msg.result
    },
    putEmotion (state, msg){
      state.emotion = msg.result
    },
    setDate(state, data) {
      state.date = data
    },
    test(state, num) {
      state.test += num
    },
    adddairy (state, diary){
      diary["id"] = state.id
      state.diary_list.push(diary)
      ++state.id
    },
    setIsReload(state, flag){
      state.isreload = flag
    },
    setLastDay(state, day){
      state.lastDay = day
    }
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: {
    App,
    'v-icon': Icon,
  },
  template: '<App/>'
})

