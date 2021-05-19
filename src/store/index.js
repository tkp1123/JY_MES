import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import collapse from './collapse'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        collapse,
    },
    getters,
})