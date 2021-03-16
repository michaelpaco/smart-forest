export const state = () => ({
  loggedIn: false,
});

export const mutations = {
  setLoggedIn(state) {
    state.loggedIn = true;
  },
};

export const actions = {
  async signUpUser({ commit }, { email, password }) {
    try {
      await this.$fire.auth.createUserWithEmailAndPassword(email, password);

      commit("setLoggedIn");
    } catch (error) {
      this.$swal.fire(this.$i18n.t(`errors.${error.code}`));
    }
  },
  async signInUser({ commit }, { email, password }) {
    try {
      await this.$fire.auth.signInWithEmailAndPassword(email, password);

      commit("setLoggedIn");
    } catch (error) {
      this.$swal.fire(this.$i18n.t(`errors.${error.code}`));
    }
  },
};
