import { defineStore } from "pinia";

export const useUserStore = defineStore({
  id: "user",
  state: () => ({
    token: null,
  }),
  getters: {
    tokenGetter: (state) => state.token,
  },
  actions: {
    setToken(_token) {
      this.$state.token = _token;
    },
  },
});
