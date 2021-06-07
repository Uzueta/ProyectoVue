import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        tickets: [],
        ticket: {},
        ticketsFiltrados: [],
        prioridades: ["B", "M", "A"],
        categorias: [],
        categoria: {},
        personas: [],
        persona: {}
    },
    mutations: {
        SET_TICKETS(state, tickets) {
            state.tickets = tickets;
        },
        SET_TICKET(state, ticket) {
            state.tickets = ticket;
        },
        SET_TICKETS_FILTRADOS(state, tickets){
            state.ticketsFiltrados = tickets;
        },
        SET_CATEGORIAS(state, categorias) {
            state.categorias = categorias;
        },
        SET_CATEGORIA(state, categoria) {
            state.categoria = categoria;
        },
        SET_PERSONAS(state, personas) {
            state.personas = personas;
        },
        SET_PERSONA(state, persona) {
            state.persona = persona;
        }
    },
    actions: {
        //tickets
        setTickets({ commit }) {
            axios.get('http://localhost:3000/tickets')
                .then(res => {
                    commit('SET_TICKETS', res.data)
                })
        },
        obtenerTicket({ commit }, { id, onComplete, onError }) {
            axios.get(`http://localhost:3000/tickets/${id}`)
                .then(response => {
                    commit('SET_TICKET', response.data.data);
                    onComplete(response)
                })
                .catch(onError)
        },
        obtenerTicketsFiltrados({ commit }, {id, onError}){
            console.log(id);
            axios.get(`http://localhost:3000/tickets/filtrar/${id}`)
                .then(response => {
                    console.log(response);
                    commit('SET_TICKETS_FILTRADOS', response.data);
                    // onComplete(response)
                })
                .catch(onError)
        },
        crearTicket({ commit }, { params, onComplete, onError }) {
            axios.post('http://localhost:3000/tickets', params)
                .then(onComplete)
                .catch(onError)
            console.log(commit.length)
        },
        editarTicket({ commit }, { id, params, onComplete, onError }) {
            axios.put(`http://localhost:3000/tickets/${id}`, params)
                .then(onComplete)
                .catch(onError)
            console.log(commit.length)
        },
        eliminarTicket({ commit }, { id, onComplete, onError }) {
            axios.delete(`http://localhost:3000/tickets/${id}`)
                .then(onComplete)
                .catch(onError)
            console.log(commit.length)
        },
        //categorias
        setCategorias({ commit }) {
            axios.get('http://localhost:3000/categorias')
                .then(res => {
                    commit('SET_CATEGORIAS', res.data)
                })
        },
        obtenerCategoria({ commit }, { id, onComplete, onError }) {
            axios.get(`http://localhost:3000/categorias/${id}`)
                .then(response => {
                    commit('SET_CATEGORIA', response.data.data);
                    onComplete(response)
                })
                .catch(onError)
        },
        eliminarCategoria({ commit }, { id, onComplete, onError }) {
            axios.delete(`http://localhost:3000/categorias/${id}`)
                .then(onComplete)
                .catch(onError)
            console.log(commit.length)
        },
        crearCategoria({ commit }, { params, onComplete, onError }) {
            axios.post('http://localhost:3000/categorias', params)
                .then(onComplete)
                .catch(onError)
            console.log(commit.length)
        },
        //personal
        setPersonas({ commit }) {
            axios.get('http://localhost:3000/personal')
                .then(res => {
                    commit('SET_PERSONAS', res.data)
                })
        },
        obtenerPersona({ commit }, { id, onComplete, onError }) {
            axios.get(`http://localhost:3000/personal/${id}`)
                .then(response => {
                    commit('SET_PERSONA', response.data.data);
                    onComplete(response)
                })
                .catch(onError)
        },
        crearPersonal({ commit }, { params, onComplete, onError }) {
            axios.post('http://localhost:3000/personal', params)
                .then(onComplete)
                .catch(onError)
            console.log(commit.length)
        },
        eliminarPersonal({ commit }, { id, onComplete, onError }) {
            axios.delete(`http://localhost:3000/personal/${id}`)
                .then(onComplete)
                .catch(onError)
            console.log(commit.length)
        },
        editarPersona({ commit }, { id, params, onComplete, onError }) {
            axios.put(`http://localhost:3000/personal/${id}`, params)
                .then(onComplete)
                .catch(onError)
            console.log(commit.length)
        },
    },
    modules: {}
})