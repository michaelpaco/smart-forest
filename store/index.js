export const state = () => ({
  loggedIn: false
})

export const mutations = {
  setLoggedIn (state) {
    state.loggedIn = true
  }
}

export const actions = {
  async signUpUser ({ commit, state }, { email, password }) {
    try {
      await this.$fire.auth.createUserWithEmailAndPassword(email, password)
    } catch (e) {
      console.error('ERROR: ', e)
    }
  },
  async signInUser ({ commit, state }, { email, password }) {
    try {
      await this.$fire.auth.signInWithEmailAndPassword(email, password)

      commit('setLoggedIn')
    } catch (e) {
      console.error('ERROR: ', e)
    }
  }
}
