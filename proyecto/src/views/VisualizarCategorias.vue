<template>
  <div>
    <h1>Categorias</h1>
    <b-button variant="success" to="/AgregarCategorias">Agregar</b-button>
    <Table :items="categorias" :fields="campos">
      <template slot="actions" slot-scope="{ item }">
        <b-button  variant="outline-danger" @click="onEliminar(item)">Eliminar</b-button>
      </template>
    </Table>
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
                { key: "actions", label: "Acciones" }
            ]
        }
    },
    computed:{
        ...mapState(['categorias'])
    },
    methods:{
        ...mapActions(['setCategorias','eliminarCategoria']),
        onEliminar(item) {
      console.log("Eliminar", item.item.CategoryID);
      this.$bvModal
        .msgBoxConfirm("Esta opción no se puede deshacer.", {
          title: "Eliminar Categoria",
          size: "sm",
          buttonSize: "sm",
          okVariant: "danger",
          okTitle: "Aceptar",
          cancelTitle: "Cancelar",
          footerClass: "p-2",
          centered: true,
        })
        .then((value) => {
          if (value) {
            this.eliminarCategoria({
              id: item.item.CategoryID,
              onComplete: (response) => {
                this.$notify({
                  type: "success",
                  title: response.data.mensaje,
                });
                setTimeout(() => this.setCategorias(), 1000);
              },
              onError: (error) => {
                console.log(error.response.data.mensaje);
                this.$notify({
                  type: "error",
                  title: error.response.data.mensaje,
                });
              },
            });
          }
        })
        .catch((err) => {
          console.log(err)
        });
    },
    },          
    mounted(){
        this.setCategorias()
    }

}
</script>

<style>

</style>