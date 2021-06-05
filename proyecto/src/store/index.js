import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tickets: [],
    categorias: [],
    categoria: {},
    personal: []
  },
  mutations: {
    SET_TICKETS(state, tickets){
      state.tickets = tickets;
    },
    SET_CATEGORIAS(state, categorias){
      state.categorias = categorias;
    },
    SET_CATEGORIA(state, categoria) {
      state.categoria = categoria;
    },
    SET_PERSONAL(state,personal){
      state.personal=personal;
    }
  },
  actions: {
    setTickets({commit}){
      axios.get('http://localhost:3000/')
      .then(res => {
        commit('SET_TICKETS',res.data)
      })
    },
    setCategorias({commit}){
      axios.get('http://localhost:3000/categorias')
      .then(res => {
        commit('SET_CATEGORIAS',res.data)
      }) 
    },
    setPersonal({commit}){
      axios.get('http://localhost:3000/personal')
      .then(res =>{
        commit('SET_PERSONAL',res.data)
      })
    },
    obtenerCategoria({commit}, {id, onComplete, onError}) {
      axios.get(`http://localhost:3000/${id}`)
      .then( response => {
        commit('SET_CATEGORIA', response.data.data);
        onComplete(response)
      })
      .catch(onError)
    },
    eliminarCategoria({commit}, {id, onComplete, onError}){
      axios.delete(`http://localhost:3000/${id}`)
      .then(onComplete)
      .catch(onError)
      console.log(commit.length)
    },
    crearCategoria({commit},{params,onComplete,onError}){
      axios.post('http://localhost:3000/categorias',params)
      .then(onComplete)
      .catch(onError)
      console.log(commit.length)
    },
    crearPersonal({commit},{params,onComplete,onError}){
      axios.post('http://localhost:3000/personal',params)
      .then(onComplete)
      .catch(onError)
      console.log(commit.length)
    }
  },
  modules: {
  }
})
