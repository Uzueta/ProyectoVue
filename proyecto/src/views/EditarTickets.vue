<template>
  <div>
    <h1>Editar</h1>
    <b-form @submit.prevent="guardarTickets()">
      <Input
        v-model="tickets.Descripcion"
        id="Descripcion"
        titulo="Descripcion"
        placeholder="Ingrese la descripción"
        :maxlength="50"
        class="mb-2"
      />
      <Input
        v-model="tickets.PersonaID"
        id="PersonaID"
        titulo="Personal"
        placeholder="Seleccione al personal"
        :maxlength="50"
        class="mb-2"
      />
      <Input
        v-model="tickets.CategoryID"
        id="CategoryID"
        titulo="Categoría"
        placeholder="Seleccione la categoría"
        :maxlength="50"
        class="mb-2"
      />
      <label>Prioridad</label>
      <select
        class="form-select"
        aria-label="Default select example"
        v-model="tickets.Prioridad"
      >
        <option value="" disabled hidden>Seleccione la prioridad</option>
        <option value="B">Baja</option>
        <option value="M">Media</option>
        <option value="A">Alta</option>
      </select>


      <b-button type="submit" class="mt-2" variant="primary">Guardar</b-button>
    </b-form>
  </div>
</template>

<script>
import Vue from "vue";
import { mapActions } from "vuex";
import Input from "../components/input";

export default {
  name: "EditarTickets",
  components: {
    Input,
  },
  data() {
    return {
      tickets: {
        Descripcion: "",
        Prioridad: "",
        PersonaID: "",
        CategoryID: "",
      },

      erroresValidacion: false,
    };
  },
  computed: {
    validacionDescripcion() {
      return (
        this.tickets.Descripcion !== undefined &&
        this.tickets.Descripcion.trim() !== ""
      );
    },
  },
  methods: {
    ...mapActions(["obtenerTicket", "editarTicket"]),
    guardarTickets() {
      if (this.validacionDescripcion) {
        this.erroresValidacion = false;

        this.editarTicket({
          id: this.$route.params.id,
          params: this.tickets,
          onComplete: (response) => {
            console.log(response.data);
            this.$notify({
              type: "success",
              title: response.data.mensaje,
            });
            this.$router.push({
              name: "VisualizarTickets",
            });
          },
          onError: (error) => {
            console.log(error.response.data.mensaje);
            this.$notify({
              type: "error",
              title: error.response.data.mensaje,
            });
          },
        });
      } else {
        this.erroresValidacion = true;
      }
    },
  },
  created() {
    this.obtenerTicket({
      id: this.$route.params.id,
      onComplete: (response) => {
        Vue.set(this, "ticket", response.data.data);
      },
    });
  },
};
</script>

<style>
</style>