import Vuex from 'vuex'
import Vue from 'vue'
import claims from './modules/claims'

Vue.use(Vuex)

export default new Vuex.Store ({
  modules: {
    claims
  }
})
