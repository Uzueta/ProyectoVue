<template>
  <div>
    <h1>Personal</h1>
    <b-button variant="primary" to="/AgregarPersonal">Agregar</b-button>
    <Table :items="personas" :fields="campos">
      <template slot="actions" slot-scope="{ item }">
        <b-button class="me-1" @click="onEditar(item)">Editar</b-button>
        <b-button @click="onEliminar(item)">Eliminar</b-button>
      </template>
    </Table>
  </div>
</template>

<script>
import Table from "../components/Table";
import {mapActions, mapState} from "vuex";

export default {
  name: "VisualizarPersonal",
  components: {
    Table,
  },
  data() {
    return {
      campos: [
        { key: "PersonaID", label: "Clave" },
        { key: "Nombre", label: "Nombre" },
        { key: "Apellidos", label: "Apellidos" },
        {
          key: "Telefono",
          label: "Telefono",
          formatter: (value) => {
            return value || "-";
          },
        },
        {
          key: "Direccion",
          label: "Direccion",
          formatter: (value) => {
            return value || "-";
          },
        },
        { key: "actions", label: "Acciones" },
      ],
    };
  },
  computed: {
    ...mapState(["personas"]),
  },
  methods: {
    ...mapActions(["setPersonas", "eliminarPersonal"]),
    onEditar(item) {
      console.log("Editar", item.item.PersonaID);
      this.$router.push({
        name: "EditarPersonal",
        params: {
          id: item.item.PersonaID,
        },
      });
    },
    onEliminar(item) {
      console.log("Eliminar", item.item.PersonaID);
      this.$bvModal
        .msgBoxConfirm("Esta opción no se puede deshacer.", {
          title: "Eliminar Persona",
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
            this.eliminarPersonal({
              id: item.item.PersonaID,
              onComplete: (response) => {
                this.$notify({
                  type: "success",
                  title: response.data.mensaje,
                });
                setTimeout(() => this.setPersonas(), 1000);
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
          console.log(err);
        });
    },
  },
  mounted() {
    this.setPersonas();
  },
};
</script>

