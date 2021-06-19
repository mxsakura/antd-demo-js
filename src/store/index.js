import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    number: 1
  },
  mutations: {
    SET_NUMBER: (state, number) => {
      state.number = number
    }
  },
  actions: {
    setNumber: ({ commit }, number) => {
      return commit('SET_NUMBER', number)
    }
  },
  modules: {
    book: {
      state: {
        number: 1
      },
      mutations: {
        SET_NUMBER: (state, number) => {
          state.number = number
        }
      },
      actions: {
        setNumber: ({ commit }, number) => {
          return commit('SET_NUMBER', number)
        }
      }
    }
  },
  getters: {
    number: state => state.book.number
  }
})
