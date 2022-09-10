import { defineStore } from "pinia";

export const useUserStore = defineStore({
  id: "user",
  state: () => ({
    token: null,
  }),
  getters: {
    tokenGetter: (state) => state.token,
    isLoggedIn: (state) => (state.token ? true : false),
  },
  actions: {
    setToken(_token) {
      this.$state.token = _token;
    },
    removeToken() {
      this.$state.token = null;
    },
  },
});
