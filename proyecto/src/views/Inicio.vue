<template>
  <div class="inicio">
    <h1>Sistema de Tickets</h1>
     <label class="mt-2">Categoria</label>
     <div class="row pb-3">
       <div class="col-2">
          <select
        class="form-select"
        aria-label="Default select example"
        v-model="Categoria.CategoryID"
        @change="filtrar()"
          >
          <option value="" disabled hidden>Selecciona</option>
          <option v-for="item in categorias" :value="item.CategoryID" :key="item.id">
            {{ item.CategoryName }}
          </option>
        </select>
       </div> 
     </div>
     <div class="cards">
       <Card v-for="t in ticketsFiltrados" :key="t.ticketsID" :color="returnColor(t)" :nombre="t.Nombre" :id="t.ticketsID" :descripcion="t.Descripcion" :estatus="t.Estatus" :prioridad="t.Prioridad"/>
    </div>
    
  </div>
</template>

<script>


import { mapActions, mapState } from "vuex";
import Card from '../components/Card'
export default {
    name: "Inicio",
    components: {
      Card
    },
    data(){
    return{
      Categoria: {
        Nombre: "",
        CategoryID: ""
      }
    }
  },
  computed: {
    ...mapState(["prioridades", "personas", "categorias", "ticketsFiltrados"])
    },
  methods: {
    ...mapActions(["setCategorias", "obtenerTicketsFiltrados"]),
    returnColor(tickets) {  
        if (tickets.Estatus === 'ESP') return 'success'
        if (tickets.Estatus === 'ABT') return 'danger'
        if (tickets.Estatus === 'FIN') return 'secondary'
      },
      filtrar(){
        this.obtenerTicketsFiltrados({
        id: this.Categoria.CategoryID
    });
      }
  },
  mounted() {
    this.setCategorias();
  }
  
}
</script>

<style>
  .cards{
    display: flex;
  }
</style>