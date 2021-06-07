<template>
  <div class="tickets">
    <h1>Tickets</h1>
    <b-button variant="success" to="/AgregarTickets">Agregar</b-button>
    <Table :items="tickets" :fields="campos">
      <template slot="actions" slot-scope="{ item }">
        <b-button variant="outline-info" class="me-1" @click="onEditar(item)">Editar</b-button>
        <b-button variant="outline-danger" class="me-1" @click="onEliminar(item)">Eliminar</b-button>
        <b-button variant="outline-warning" class="me-1" @click="onEstatus(item)">Estatus</b-button>
      </template>
    </Table>
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
        {key: "Estatus", label: "Estatus" },
        { key: "actions", label: "Acciones" },
      ]
    }
  },
  computed:{
    ...mapState(['tickets'])
  },
  methods:{
    ...mapActions(['setTickets', 'eliminarTicket']),
    onEditar(item) {
      console.log("Editar", item.item.ticketsID);
      this.$router.push({
        name: "EditarTickets",
        params: {
          id: item.item.ticketsID,
        },
      });
    },
    onEstatus(item) {
      console.log("Estatus", item.item.ticketsID);
      this.$router.push({
        name: "CambiarEstatus",
        params: {
          id: item.item.ticketsID,
        },
      });
    },
    onEliminar(item) {
      console.log("Eliminar", item.item.ticketsID);
      this.$bvModal
        .msgBoxConfirm("Esta opción no se puede deshacer.", {
          title: "Eliminar Ticket",
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
            this.eliminarTicket({
              id: item.item.ticketsID,
              onComplete: (response) => {
                this.$notify({
                  type: "success",
                  title: response.data.mensaje,
                });
                setTimeout(() => this.setTickets(), 1000);
              },
            });
          }
        })
        .catch((err) => {
          console.log(err)
        });
    },
  },
  created(){
    this.setTickets()
  }
}
</script>