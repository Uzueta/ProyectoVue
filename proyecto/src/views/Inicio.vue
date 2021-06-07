<template>
  <div class="inicio">
    <h1>Tickets + Categorias</h1>
     <label class="mt-2">Categoria</label>
     <div class="row pb-3">
       <div class="col-2">
          <select
        class="form-select"
        aria-label="Default select example"
        v-model="Categoria.CategoryID"
          >
          <option value="" disabled hidden>Selecciona</option>
          <option v-for="item in categorias" :value="item.CategoryID" :key="item.id">
            {{ item.CategoryName }}
          </option>
        </select>
       </div>
       <div class="col">
         <b-button variant="outline-primary" @click="filtrar()">Filtrar</b-button>
       </div>
        
     </div>
      
      
    <b-table :items="ticketsFiltrados" :fields="campos" :tbody-tr-class="rowClass"></b-table>
  </div>
</template>

<script>


import { mapActions, mapState } from "vuex";
export default {
    name: "Inicio",
    components: {
    },
    data(){
    return{
      campos: [
        {key: "ticketsID", label: "Clave" },
        {key: "Nombre", label: "Nombre" },
        {   key: "Descripcion", 
            label: "Descripcion",
            formatter: (value) => {
                return value || "-";}
        },
        {key: "Prioridad", label: "Prioridad" },
        {key: "Nombre_Personal", label: "Nombre Personal" },
        {key: "CategoryName", label: "Categoria" },
        {key: "Estatus", label: "Estatus" }
      ],
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
    rowClass(tickets, type) {
        if (!tickets || type !== 'row') return  
        if (tickets.Estatus === 'ESP') return 'table-success'
        if (tickets.Estatus === 'ABT') return 'table-danger'
        if (tickets.Estatus === 'FIN') return 'table-secondary'
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
