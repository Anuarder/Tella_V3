import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        language: 'ru'
    },
    mutations: {
        setLanguage(state, language) {
            state.language = language;
        }
    },
    actions: {

    }
})