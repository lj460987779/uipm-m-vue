export const COUNT = 'header/COUNT'
export const ISMOVE = 'header/ISMOVE'

const head = {
  state: {
    count: 0,
    move: true
  },
  getters: {
    getCount (state, getters) {
      return state.count++
    },
    changeMove (state, getters) {
      let flag = state.move
      if (flag) {
        return state.move = false
      }
    }
  },
  mutations: {
    [COUNT] (state, data) {
      state.count++
    },
    [ISMOVE] (state, data) {
      state.move = data
    }
  },
  actions: {
    countAdd({ commit, state }, data) {
      commit(COUNT, data)
    },
    isMove({ commit, state }, data) {
      commit(ISMOVE, data)
    }
  }
}

export default head