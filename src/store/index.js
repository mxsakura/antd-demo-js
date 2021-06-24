import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    MenuCollapsed: {
      state: {
        collapsed: false
      },
      mutations: {
        SET_COLLAPSED: (state, bool) => {
          state.collapsed = bool
        }
      },
      actions: {
        setCollapsed: ({ commit }, bool) => {
          return commit('SET_COLLAPSED', bool)
        }
      }
    }
  },
  getters: {
    MenuCollapsed: state => state.MenuCollapsed.collapsed
  }
})
