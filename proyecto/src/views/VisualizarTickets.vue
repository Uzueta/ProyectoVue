<template>
  <div class="tickets">
    <h1>Tickets</h1>
    <Table :items="tickets" :fields="campos"/>
  </div>
</template>

<script>
import Table from '../components/Table'
import {mapActions,mapState} from 'vuex'

export default {
  name: 'VisualizarTickets',
  components: {
    Table
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
        {key: "Nombre Personal", label: "Nombre Personal" },
        {key: "CategoryName", label: "Categoria" },
        {key: "Estatus", label: "Estatus" }
      ]
    }
  },
  computed:{
    ...mapState(['tickets'])
  },
  methods:{
    ...mapActions(['setTickets'])
  },
  created(){
    this.setTickets()
  }
}
</script>