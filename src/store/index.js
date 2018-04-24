import Vue from 'vue'
import Vuex from 'vuex'
import head from './header'
import navigation from './nav'

Vue.use(Vuex)

const modules = {
  head,
  navigation
}
const store = new Vuex.Store({
  modules,
})

export default store