<template>
  <div class="categoria">
      <h1>Categorias</h1>
      <Table :items="categorias" :fields="campos"/>
  </div>
</template>

<script>
import Table from '../components/Table'
import {mapActions,mapState} from 'vuex'

export default {
    name: 'VisualizarCategorias',
    components:{
        Table
    },
    data(){
        return{
            campos:[
                {key: "CategoryID", label: "Clave" },
                {key: "CategoryName", label: "Nombre" },
            ]
        }
    },
    computed:{
        ...mapState(['categorias'])
    },
    methods:{
        ...mapActions(['setCategorias'])
    },
    created(){
        this.setCategorias()
    }

}
</script>

<style>

</style>