<template>
  <div class="personal">
    <h1>Personal</h1>
    <Table :items="personal" :fields="campos"/>
  </div>
</template>

<script>
import Table from '../components/Table'
import {mapActions,mapState} from 'vuex'

export default {
  name: 'VisualizarPersonal',
  components: {
    Table
  },
  data(){
    return{
      campos: [
        {key: "PersonaID", label: "Clave" },
        {key: "Nombre", label: "Nombre" },
        {key: "Apellidos", label: "Apellidos" },
        {   key: "Telefono", 
            label: "Telefono" ,
            formatter: (value) => {
                return value || "-";}
        },
        {   key: "Direccion ", 
            label: "Direccion",
            formatter: (value) => {
            return value || "-";}
        }
      ]
    }
  },
  computed:{
    ...mapState(['personal'])
  },
  methods:{
    ...mapActions(['setPersonal'])
  },
  created(){
    this.setPersonal()
  }
}
</script>