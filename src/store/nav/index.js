export const MOVE = 'nav/MOVE'

const navmenu = {
  state: {
    move: 0
  },
  mutations: {
    [MOVE] (state) {
      state.move++
    }
  },
  actions: {
    move ({ dispatch, commit }) {
      commit('MOVE')
    }
  }
}
export default navmenu