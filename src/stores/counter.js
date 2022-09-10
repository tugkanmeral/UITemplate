import { defineStore } from "pinia";

export const useCounterStore = defineStore({
  id: "counter",
  state: () => ({
    counter: 0,
  }),
  getters: {
    doubleCount: (state) => state.counter * 2,
  },
  actions: {
    increment() {
      this.counter++;
    },
  },
});

export const user = defineStore({
  id: "user",
  state: () => ({
    token: null,
  }),
  getters: {
    token: (state) => state.token,
  },
  actions: {
    setToken(_token) {
      this.$state.token = _token;
    },
  },
});
