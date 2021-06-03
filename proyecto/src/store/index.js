import Vue from "vue";
import { axios } from "vue/types/umd";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    tickets: []
  },
  mutations: {
    SET_TICKETS(state,tickets){
      state.tickets = tickets;
    }
  },
  actions: {
    setTickets({commit}){
      axios.get('http://localhost:3000/')
      .then(res => {
        commit('SET_TICKETS', res.data);
      })
    }
  },
  modules: {},
});
